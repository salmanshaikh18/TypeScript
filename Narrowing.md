Narrowing in TypeScript refers to the process of refining the type of a variable within a certain code block based on conditions. This is particularly useful when dealing with union types or when TypeScript's type inference isn't sufficient to determine the specific type of a variable.

TypeScript offers several mechanisms for narrowing types:

1. **Type Guards**: Type guards are expressions that perform runtime checks to determine whether a variable is of a specific type. After a successful type guard, TypeScript narrows the type of the variable within the corresponding block.

   ```typescript
   function isNumber(x: any): x is number {
       return typeof x === "number";
   }

   let value: string | number = "hello";

   if (isNumber(value)) {
       // value is narrowed to type 'number' within this block
       console.log(value.toFixed(2)); // Valid, as value is now known to be a number
   } else {
       console.log(value.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'number | string'.
   }
   ```

2. **Instanceof**: When dealing with objects and classes, the `instanceof` operator can be used as a type guard to narrow the type to a specific class.

   ```typescript
   class Dog {
       bark() {
           console.log("Woof!");
       }
   }

   class Cat {
       meow() {
           console.log("Meow!");
       }
   }

   function petSound(animal: Dog | Cat) {
       if (animal instanceof Dog) {
           animal.bark(); // Valid, animal is narrowed to Dog within this block
       } else {
           animal.meow(); // Valid, animal is narrowed to Cat within this block
       }
   }
   ```

3. **Type Predicates**: These are custom functions that return a boolean value and are specifically used in type guards.

   ```typescript
   function isString(value: any): value is string {
       return typeof value === "string";
   }

   let testValue: string | number = "hello";

   if (isString(testValue)) {
       // testValue is narrowed to type 'string' within this block
       console.log(testValue.toUpperCase()); // Valid, as testValue is now known to be a string
   } else {
       console.log(testValue.toFixed(2)); // Error: Property 'toFixed' does not exist on type 'string | number'.
   }
   ```

Narrowing types in TypeScript helps improve type safety and enables more accurate type inference, leading to better code quality and fewer runtime errors.