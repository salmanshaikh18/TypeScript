In TypeScript, a type alias is a way to give a name to a type. It allows you to create a new name for any type including primitive, union, intersection, or any other complex types you may define. This can be especially useful for simplifying complex types or for giving more semantic meaning to existing types.

Here's a basic syntax for creating a type alias:

```typescript
type MyAlias = /* type definition */;
```

And here's how you can use it:

```typescript
type MyAlias = number;
let myVariable: MyAlias;
myVariable = 10; // valid
myVariable = "hello"; // Error: Type '"hello"' is not assignable to type 'number'.
```

You can also use type aliases with more complex types:

```typescript
type Person = {
  name: string;
  age: number;
};

type Point = {
  x: number;
  y: number;
};

type Shape = "circle" | "square" | "triangle";

type ComplexType = Person | Point | Shape;
```

Type aliases can be especially helpful when you need to reuse a particular combination of types in multiple places within your code. Instead of rewriting the same type definitions, you can use a type alias to reference them easily.

Type aliases are also very useful when working with union or intersection types to give them more descriptive names, making your code more readable and maintainable.

```typescript
type Coordinates = { x: number; y: number };
type Nullable<T> = T | null;
type Result<T> = { success: boolean; data: T };

type Point = Coordinates & { z: number };
type MaybePoint = Nullable<Point>;
type OperationResult<T> = Result<T>;
```

In summary, type aliases in TypeScript provide a way to create new names for existing types, making your code more readable, maintainable, and expressive.