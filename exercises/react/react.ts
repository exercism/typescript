//
// Delete and replace stub with your own implementation
//
// Inspired by "How it Works":
// https://indepth.dev/posts/1269/finding-fine-grained-reactive-programming#how-it-works
// https://levelup.gitconnected.com/finding-fine-grained-reactive-programming-89741994ddee?source=friends_link&sk=31c66a70c1dce7dd5f3f4229423ad127#4543
//
// and "Computations":
// https://github.com/ryansolid/solid/blob/master/documentation/reactivity.md#user-content-computations
//

type EqualFn<T> = (lhs: T, rhs: T) => boolean
type GetterFn<T> = () => T
type SetterFn<T> = (v: T) => T
type UnsubscribeFn = () => void
type UpdateFn<T> = (value?: T) => T

type InputCouple<T> = [GetterFn<T>, SetterFn<T>]

type Options = {
  name: string // for debugging
}

type ObserverR = {
  name?: string
}

type ObserverV<T> = {
  value?: T
  fn: UpdateFn<T>
}

type Observer<T> = ObserverR & ObserverV<T>

type SubjectR = {
  name?: string
  observer: ObserverR | undefined
}

type SubjectV<T> = {
  value: T
  equal?: EqualFn<T>
}

type Subject<T> = SubjectR & SubjectV<T>

// module Context value
let activeObserver: ObserverR

function updateObserver<T>(observer: Observer<T>): void {
  const prevObserver = activeObserver
  activeObserver = observer
  observer.value = observer.fn(observer.value)
  activeObserver = prevObserver
}

function createInput<T>(
  value: T,
  _equal?: boolean | EqualFn<T>,
  options?: { name?: string }
): InputCouple<T> {
  const s: Subject<T> = {
    name: options?.name,
    observer: undefined,
    value,
    equal: undefined,
  }

  const read: GetterFn<T> = () => {
    if (activeObserver) s.observer = activeObserver
    return s.value
  }

  const write: SetterFn<T> = (value) => {
    s.value = value
    if (s.observer) updateObserver(s.observer as Observer<unknown>)
    return s.value
  }

  return [read, write]
}

function createComputed<T>(
  fn: UpdateFn<T>,
  value?: T,
  _equal?: boolean | EqualFn<T>,
  options?: { name?: string }
): GetterFn<T> {
  const o: Observer<T> = {
    name: options?.name,
    value,
    fn,
  }
  updateObserver(o)
  return (): T => o.value!
}

function createCallback<T>(_fn: UpdateFn<T>, _value?: T): UnsubscribeFn {
  return (): void => {} // eslint-disable-line @typescript-eslint/no-empty-function
}

export { createInput, createComputed, createCallback }
