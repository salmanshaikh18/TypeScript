In TypeScript, interfaces are used to define the structure of an object. They allow you to define contracts within your code, specifying what properties and methods an object must have to be considered as conforming to that interface.

Here's a basic syntax for creating an interface:

```typescript
interface MyInterface {
  property1: type1;
  property2: type2;
  // ...
}
```

And here's how you can use it:

```typescript
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return `Hello, ${person.name}!`;
}

let user = { name: "John", age: 30 };
console.log(greet(user)); // Output: Hello, John!
```

In this example, the `Person` interface defines a structure with `name` and `age` properties, both of which are required to be of type `string` and `number`, respectively. The `greet` function takes an argument of type `Person`, ensuring that any object passed to it must have at least the properties defined in the `Person` interface.

Interfaces can also describe functions:

```typescript
interface Calculate {
  (x: number, y: number): number;
}

let add: Calculate;
add = function(x: number, y: number) {
  return x + y;
}

console.log(add(5, 3)); // Output: 8
```

Here, the `Calculate` interface describes a function that takes two parameters of type `number` and returns a `number`. Then, we define a function `add` that conforms to this interface.

Interfaces can also be extended and can describe indexable types and optional properties, among other features. They are extremely useful for defining contracts between different parts of your code, making it easier to understand, maintain, and refactor your TypeScript codebase.