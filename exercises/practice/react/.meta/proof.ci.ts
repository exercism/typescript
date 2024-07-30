//
//  Heavily inspired by signal.ts from [https://github.com/ryansolid/solid]
//  and by extension S.js [https://github.com/adamhaile/S]
//
// See:
// https://indepth.dev/posts/1269/finding-fine-grained-reactive-programming#how-it-works
// https://levelup.gitconnected.com/finding-fine-grained-reactive-programming-89741994ddee?source=friends_link&sk=31c66a70c1dce7dd5f3f4229423ad127#4543
//

enum Status {
  OK,
  Pending,
  Stale,
}

/**
 * Type for the closure's value equality predicate.
 *
 * @typeParam T - Type of the values being compared for
 *              equality.
 *
 * @remarks
 * Conceptually this function should be equivalent
 * to: `lhs === rhs`
 *
 * @param lhs   - left hand side value
 * @param rhs   - right hand side value
 * @returns     - `true` if values are considered
 *                equal; `false` otherwise.
 */
type EqualFn<T> = (lhs: T, rhs: T) => boolean
type GetterFn<T> = () => T
type SetterFn<T> = (value: T) => T
type UnsubscribeFn = () => void
type UpdateFn<T> = (value?: T) => T

type InputPair<T> = [GetterFn<T>, SetterFn<T>]

type Options = {
  name: string
}

type ObserverR = {
  name?: string
  pure: boolean
  status: Status
  subjects: Set<SubjectR>
}

type ObserverV<T> = {
  value?: T
  updateFn: UpdateFn<T>
}

type Observer<T> = ObserverR & ObserverV<T>

type SubjectR = {
  name?: string
  observers: Set<ObserverR>
}

type SubjectV<T> = {
  value?: T
  equalFn?: EqualFn<T>
}

type Subject<T> = SubjectR & SubjectV<T>

type ComputedR = ObserverR & SubjectR

type Computed<T> = ComputedR & ObserverV<T> & SubjectV<T>

function isObserverRComputedR(observer: ObserverR): observer is ComputedR {
  const computed = observer as ComputedR
  return computed.observers !== undefined
}

function isSubjectComputed<T>(subject: Subject<T>): subject is Computed<T> {
  const computed = subject as Computed<T>
  return computed.subjects !== undefined
}

function isObserverComputed<T>(observer: Observer<T>): observer is Computed<T> {
  const computed = observer as Computed<T>
  return computed.observers !== undefined
}

const defaultEqual = <T>(lhs: T, rhs: T): boolean => lhs === rhs

function selectEqualFn<T>(
  equal: boolean | EqualFn<T> | undefined
): EqualFn<T> | undefined {
  if (typeof equal === 'function') return equal

  if (equal === true) return defaultEqual

  return undefined
}

// module context values
let activeObserver: ObserverR
let updateQueue: ObserverR[] | undefined
let callbackQueue: ObserverR[] | undefined

function link(subject: SubjectR, observer: ObserverR): void {
  observer.subjects.add(subject)
  subject.observers.add(observer)
}

function unsubscribe(observer: ObserverR): void {
  observer.subjects.forEach((sub) => {
    sub.observers.delete(observer)
  })
}

function makeUnsubscribe(observer: ObserverR | undefined): UnsubscribeFn {
  return (): void => {
    if (!observer) return
    const o = observer
    observer = undefined

    unsubscribe(o)
  }
}

function prepareForUpdate(observer: ObserverR): void {
  if (isObserverRComputedR(observer) && observer.status !== Status.Pending) {
    markDeepObservers(observer)
  }
  observer.status = Status.Stale

  if (observer.pure) updateQueue!.push(observer)
  else callbackQueue!.push(observer)
}

function markDeep(observer: ObserverR): void {
  if (observer.status === Status.OK) {
    observer.status = Status.Pending
    if (isObserverRComputedR(observer)) markDeepObservers(observer)
  }
}

function markDeepObservers(subject: SubjectR): void {
  subject.observers.forEach(markDeep)
}

function runUpdates(prepareUpdates: () => void): void {
  if (updateQueue) return prepareUpdates()

  const updates: ObserverR[] = []
  updateQueue = updates

  const [callbacks, delayCallbacks] = callbackQueue
    ? [callbackQueue, true]
    : [[], false]
  callbackQueue = callbacks

  prepareUpdates()
  updateQueued(updates)
  updateQueue = undefined

  if (delayCallbacks) return

  updateQueued(callbacks)
  callbackQueue = undefined
}

function updateQueued(queued: ObserverR[]): void {
  for (let i = 0; i < queued.length; i++) {
    updateViaStatus(queued[i] as Observer<unknown>, true)
  }
}

function updateViaStatus<T>(
  observer: Observer<T>,
  saveQueue: boolean = false
): void {
  switch (observer.status) {
    case Status.Pending: {
      if (saveQueue !== true) {
        updateDeepStaleSubjects(observer)
      } else {
        const prevUpdate = updateQueue
        updateQueue = undefined
        updateDeepStaleSubjects(observer)
        updateQueue = prevUpdate
      }
      break
    }
    case Status.Stale:
      updateObserver(observer)
      break
  }
}

function updateDeep<T>(subject: Subject<T>): void {
  if (isSubjectComputed(subject)) updateViaStatus(subject)
}

function updateDeepStaleSubjects<T>(observer: Observer<T>): void {
  observer.subjects.forEach(updateDeep)
}

function updateObserver<T>(observer: Observer<T>): void {
  unsubscribe(observer)
  const prevObserver = activeObserver
  activeObserver = observer

  observer.status = Status.OK
  const nextValue = observer.updateFn(observer.value)
  if (isObserverComputed(observer)) writeSubject(observer, nextValue)
  else observer.value = nextValue

  activeObserver = prevObserver
}

function readSubject<T>(subject: Subject<T>): T {
  if (isSubjectComputed(subject) && subject.status !== Status.OK) {
    const updates = updateQueue
    updateQueue = undefined
    updateViaStatus(subject)
    updateQueue = updates
  }
  if (activeObserver) link(subject, activeObserver)

  return subject.value!
}

function writeSubject<T>(subject: Subject<T>, value: T): T {
  if (subject.equalFn && subject.value && subject.equalFn(subject.value, value))
    return value

  subject.value = value

  if (subject.observers.size) {
    runUpdates(() => subject.observers.forEach(prepareForUpdate))
  }

  return subject.value
}

/**
 * Creates an input closure. The value is accessed
 * via the accessor and changed via the
 * mutator returned as part an `InputPair<T>`.
 *
 * @typeParam T   - Type of the closure's value.
 *                By extension the type of the return
 *                value of the accessor and the type
 *                of the mutator's single argument.
 *
 * @param value   - Input closure's initial value.
 * @param equal   - By default the current and previous
 *                values are not compared so invoking
 *                the mutator with identical values
 *                will trigger updates on any
 *                subscribers. When `true` is
 *                specified the
 *                {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality | strict equality operator}
 *                is used to compare values and
 *                mutations with unchanging values
 *                **are** suppressed.
 *                When `T` is a structural type
 *                it is necessary to provide a
 *                `(a: T, b: T) => boolean` comparison
 *                predicate instead.
 * @param options - Holder object for relevant options.
 *                Assigning a `name` to a subject can
 *                be useful during debugging.
 * @returns       - An `InputPair<T>`. The 1st
 *                element is the accessor (getter
 *                function), the 2nd element is
 *                the mutator (setter function).
 */
function createInput<T>(
  value: T,
  equal?: boolean | EqualFn<T>,
  options?: Options
): InputPair<T> {
  const subject: Subject<T> = {
    name: options?.name,
    observers: new Set<ObserverR>(),
    value,
    equalFn: selectEqualFn(equal),
  }

  return [
    (): T => readSubject(subject),
    (next: T): T => writeSubject(subject, next),
  ]
}

/**
 * Creates a computed (derived) closure with the
 * supplied function which computes the current value
 * of the closure.
 *
 * @typeParam T   - Type of the closure's value.
 *                By extension the type of the value
 *                returned by the update function and
 *                of the value
 *                accepted by the function.
 *
 * @param updateFn - Update function. This function
 *                 references one or more accessors of
 *                 other subjects. It **should not**
 *                 perform side effects. It is expected
 *                 to return a value which will be the
 *                 value of the closure until the next
 *                 update. The closure's value is
 *                 supplied to this update function
 *                 on the next update.
 * @param value    - Initial value that is passed to
 *                 `updateFn` when it executes for the
 *                 first time.
 * @param equal    - By default the current and previous
 *                 values are not compared so updates
 *                 will be triggered even if the value
 *                 doesn't _change_. When `true` is
 *                 specified the
 *                 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality | strict equality operator}
 *                 is used to compare values and updates
 *                 with identical values **are**
 *                 suppressed. When `T` is a structural
 *                 type it is necessary to provide a
 *                 `(a: T, b: T) => boolean` comparison
 *                 predicate instead.
 * @param options  - Holder object for relevant options.
 *                 Assigning a `name` to a subject can
 *                 be useful during debugging.
 * @returns        - The accessor to the closure's
 *                 value (getter function). Retrieves
 *                 the closure's current value. Used by
 *                 observers (or more accurately their
 *                 update function) to obtain the
 *                 value (and to subscribe for
 *                 updates).
 */
function createComputed<T>(
  updateFn: UpdateFn<T>,
  value?: T,
  equal?: boolean | EqualFn<T>,
  options?: Options
): GetterFn<T> {
  const computed: Computed<T> = {
    name: options?.name,
    observers: new Set<ObserverR>(),
    value,
    equalFn: selectEqualFn(equal),
    updateFn,
    status: Status.Stale,
    pure: true,
    subjects: new Set<SubjectR>(),
  }
  updateObserver(computed)
  return (): T => readSubject(computed)
}

/**
 * Creates a callback closure with the supplied
 * function which is expected to perform side effects.
 *
 * @typeParam T    - Type of the closure's value.
 *                 By extension the type of the value
 *                 returned by the callback function
 *                 and of the value accepted by the
 *                 function.
 *
 * @param updateFn - Callback function. This function
 *                 references one or more accessors of
 *                 subjects. It may perform side effects.
 *                 It will also be passed the
 *                 value that it returned the last time it
 *                 was invoked.
 * @param value    - Initial value that is passed to
 *                 `updateFn` when it executes for
 *                  the first time.
 * @returns        - The `unsubscribe` function. Once
 *                 invoked the callback closure will
 *                 stop receiving updates from the
 *                 subjects it subscribed to.
 */
function createCallback<T>(updateFn: UpdateFn<T>, value?: T): UnsubscribeFn {
  const o: Observer<T> = {
    value,
    updateFn,
    status: Status.Stale,
    pure: false,
    subjects: new Set<SubjectR>(),
  }

  if (callbackQueue) callbackQueue.push(o)
  else updateObserver(o)

  return makeUnsubscribe(o)
}

export { createInput, createComputed, createCallback }

// -------------------------------------------------------
//
// A `Subject<T>` provides its output value **to**
// its dependents (`Observer<T>`s).
//
// An `Observer<T>` gets its input values **from**
// its dependencies (`Subject<T>`s).
//
// A `Computed<T>` merges the _aspects_ of
// both `Observer<T>` and `Subject<T>`.
// Of the three types `Computed<T>` is the most _general_.
// So while `Computed<T>` is composed of both
// `Subject<T>` and `Observer<T>`, both
// `Subject<T>`, `Observer<T>` could be viewed as
// _constrained_ versions of `Computed<T>` (as
// opposed to _specialized_ versions).
//
// Each type is further split into its _value_ aspect
// (e.g. `ObserverV<T>`) and _relation_ (or _rest_)
// aspect (e.g. `ObserverR`). This tactic helps to
// avoid using generic type references with an
// explicit _any_ type parameter in the update
// routing logic which has no actual dependency
// on the type `T` being managed by the
// `Subject<T>`/ `Observer<T>`/`Computed<T>`
// instance.
//
// The existence of the value aspect is only
// acknowledged in `updateQueued()` where the
// `ObserverR` type is asserted to be an
// `Observer<unknown>` which from this point on is
// then handled by generic functions.
//
// So `createInput<T>()` internally creates a
// `Subject<T>`, `createCallback<T>()` an `Observer<T>`, and
// `createComputed<T>()` a `Computed<T>`.
//
// `createInput<T>()` returns two functions in an
// `InputCouple<T>` tuple, a `GetterFn<T>` accessor
// and a `SetterFn<T>` mutator. The mutator triggers
// the update of all the `Subject<T>`'s dependents
// while the accessor returns the `Subject<T>`'s
// current value.
//
// The accessor also has the hidden responsibility
// of subscribing the `Observer<T>` that is accessing
// the `Subject<T>`. The `Observer<T>` shares its
// reference via the module's `activeObserver` context
// value. The `Subject<T>` stores that dependency in
// its `observers` property.
//
// `createComputed<T>()` only returns a `GetterFn<T>`
// accessor to obtain the internal `Computed<T>`'s
// current value. The primary argument to
// `createComputed<T>()` is `fn: UpdateFn<T>` - the
// function responsible for deriving the
// `Computed<T>`'s value from its dependencies
// (and the `Computed<T>`'s own previous value). This
// function is invoked whenever at least one of the
// `Computed<T>`'s dependencies has an updated value.
// The function is run before `createComputed<T>()`
// exits via `updateObserver<T>()` so that
// * the `Computed<T>` can calculate its current value
// * the `Computed<T>` subscribes to all its
//   relevant dependencies.
//
// To that end `updateObserver<T>()` sets the
// module's `activeObserver` context value before
// invoking `fn: UpdateFn<T>` so that all the
// `Subject<T>`'s being accessed can register the
// subscription of the `Observer<T>` (or `Computed<T>`).
//
// (Note that `updateObserver<T>()` unsubscribes the
// `Observer<T>` (or `Computed<T>`) first - this is
// essential later so that the `Observer<T>` isn't
// updated for  irrelevant dependencies - e.g. an
// input accessor that is guarded by an `if` condition
// that currently evaluates to `false`.)
//
// `createCallback<T>()` returns an `UnsubscribeFn`
// function that deactivates the callback when invoked.
// There is no `GetterFn<T>` because the callbacks
// act by _side effect_ - i.e. changing values that
// exist in their enclosing scope (closure:
// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch7.md
// ). Internally a callback is based on a `Observer<T>`.
// The primary argument to
// `createCallback<T>()` is `fn: UpdateFn<T>` - the
// function is responsible for accessing the `Subject<T>`
// dependencies (and thereby subscribing to them)
// and implementing the side effect(s). This
// function is called whenever at least one of the
// `Observer<T>`'s dependencies has an updated value.
// `updateObserver<T>()` is only invoked if currently no
// update is in progress - otherwise the callback is
// queued for later invocation.
//
// All three `create*` functions take a `value: T`
// argument - required for `createInput<T>()`,
// optional for the others. For `createInput<T>()`
// this is the initial value - for the others it is the
// argument that is passed to the `fn: UpdateFn<T>`
// the first time it executes.
//
// `createInput<T>()` and `createComputed<T>()` have
// an (optional) ` equal?: boolean | EqualFn<T>`
// argument. Given the generic implementation of the
// capabilities, by default `Subject<T>`s don't
// limit updates to occasions when their `value`
// _changes_ - as there is no standardized way
// to check for equality of `T` in TypeScript
// (compared to for example Rust):
// https://doc.rust-lang.org/std/cmp/trait.PartialEq.html
// https://doc.rust-lang.org/std/cmp/trait.Eq.html
//
// A value of `true` directs the use of the default
// equality function `defaultEqual` which will work
// for primitive types and references. Otherwise a
// custom equality predicate must be provided
// if updates for identical values of `T` are to
// be suppressed.
//
// `createCallback<T>` doesn't have this argument.
// Therefore it is necessary to configure the
// `Subject<T>`s it depends on to suppress updates
// on identical values.
//
// `createInput<T>()` and `createComputed<T>()` have
// an optional `Options` value that may carry a
// `name` property. This can come in handy for
// debugging.
//
// The core capability is driven by the
// `writeSubject<T>` function which is invoked whenever
// an input is set with its `SetterFn<T>` or a
// `Computed<T>` has its `value` set by a dependency.
// The update of dependents is suppressed for identical
// values provided the `Subject<T>` is configured
// accordingly. Otherwise all the observers are
// prepared for update before the actual updates are
// made.
//
// `prepareForUpdate()` first marks the dependents of a
// `Computed<T>` as `Status.Pending` _in depth_. The
// observer itself is marked as `Status.Stale` before
// being pushed onto `updateQueue` or `callbackQueue`.
//
// * `Status.Pending` - an `Observer<T>` has this
//   status when one of its dependencies _descendents_
//   is marked as `Status.Stale`. It acts as a
//   pre-`Status.Stale` status. The `Observer<T>`
//   instance is "out-of-sync" but not yet ready
//   for update (so it isn't on `updateQueue`).
// * `Status.Stale` - an `Observer<T>` enters this
//   state when at least one of its direct
//   dependencies has been updated. The `Observer<T>`
//   instance is on `updateQueue`.
//
// `runUpdates` coordinates the current update wave.
// The passed `prepareUpdate` function is invoked if an
// update wave is already underway. Otherwise an empty
// `updateQueue` is set up. If callbacks are already
// being queued this particular `runUpdates` invocation
// won't be processing callbacks
// (`delayCallbacks = true`) - otherwise an empty
// `callbackQueue` is set up.
//
// Finally the passed `prepareUpdates` function is
// invoked causing "computeds" to be queued up on
// `updateQueue` and "callbacks" to be queued up on
// `callbackQueue`. The `updateQueue` is processed
// with the `updateQueued()` function.
//
// Callbacks are only processed if this is the
// top-level invocation of `runUpdates()` - this
// ensures that callbacks are updated as late as
// possible to avoid unnecessary, multiple
// updates.
//
// Updates routed through `updateViaStatus` by
// `updateQueued` start a nested (deep) update wave
// for an `Observer<T>` in the `Status.Pending`
// status - i.e. there are dependencies in need of
// update  before the `Observer<T>` can perform
// a meaningful update of itself. `Observer<T>`'s
// in the `Status.Stale` status can immediately update
// themselves via their `fn: UpdateFn<T>`.
//
// `readSubject<T>()` will issue a nested update wave
// if it discovers that its `Subject<T>` is currently
// **not** in `Status.OK` status as it needs those
// updates to complete before an up-to-date `value`
// can be returned.
//
// References:
//
// Enums
// https://www.typescriptlang.org/docs/handbook/enums.html
//
// Type Aliases
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases
//
// Function Types
// https://www.typescriptlang.org/docs/handbook/functions.html#function-types
//
// Generics
// https://www.typescriptlang.org/docs/handbook/generics.html
//
// Optional and Default Types
// https://www.typescriptlang.org/docs/handbook/functions.html#optional-and-default-parameters
//
// Tuple
// https://www.typescriptlang.org/docs/handbook/basic-types.html#tuple
//
// Optional Properties
// https://www.typescriptlang.org/docs/handbook/interfaces.html#optional-properties
//
// Set
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
//
// Intersection Types
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
//
// User-Defined Type Guards
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
//
// Type Assertions
// https://www.typescriptlang.org/docs/handbook/basic-types.html#type-assertions
//
// Union Types
// https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#union-types
//
// typeof
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
//
// Unknown
// https://www.typescriptlang.org/docs/handbook/basic-types.html#unknown
//
// Non-null assertion operator
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator
//
// Optional chaining (?.)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
//
// -------------------------------------------------------
