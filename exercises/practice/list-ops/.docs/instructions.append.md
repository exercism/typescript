# Instructions append

Using core language features to build and deconstruct arrays via destructuring, and using the array literal `[]` are allowed, but no functions from the `Array.prototype` should be used.

In order to be able to test your solution, ensure `forEach` is implemented.

```typescript
const list = List.create(1, 2)
list.forEach((item) => console.log(item))
// =>
//    1
//    2
```