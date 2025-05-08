# Blog Task

## 1.What are some differences between interfaces and types in TypeScript?

- In TypeScript, interfaces are used to define the structure or type of an object.
- In TypeScript, types are used to define any type.

  In TypeScript, interfaces and types work almost the same. However, there are some important differences and specific use cases between them.

### 1.Extend/Merge Example:

- interface use extends to inheritance

```
    interface User{
        name: string;
        age: number;
     }

    interface Admin extends User {
        role: string;
    }
```

- type use & to merge

```
  type User = {
     name: string;
     age: number;

  }

  type Admin = {
    role = string;
  }
```

### 2.Type vs Interface Declarations With Examples

In TypeScript, an interface can be declared and modified multiple times, but if you declare a type alias once and then define it again with the same name, an error occurs.

- interface supports merging

```
  interface User{
    name: string;
    age: number;

  }

  interface User {
     isMarried : boolean;
  }

  // User = {name: string; age: number; isMarried: boolean }
```

- type not supports merging

```
  type User = {
    name: string;
    age: number;

  }

  type User = {
    isMarried : boolean;

  } //Error: Duplicate identifier 'User'
```

#### Typescript give this Error: Duplicate identifier 'User'

### Interface vs Type Which Should You Use?

#### Interface Use

- If you only want to define the structure of an object and need to extend or merge it in the future, then you should use an interface.
- On the other hand, using an interface to define the structure of a primitive type, array, or function can be a bit complicated.

#### Type Use

- If you need a more flexible type such as union, intersection, or tuple then it's better to use type.
- With type you can define both primitive and non-primitive types in a flexible way.

---

## Provide an example of using union and intersection types in TypeScript.

#### What is Union Types?

The Union type is used when a variable can be any one of multiple types. This is done using the | (pipe) symbol.

#### What are Intersection Types?

The intersection type is used when a variable needs to have all the properties of more than one type. This is done using the & (AND) symbol.

### Union and Intersection Type Examples

- Union type Examples:

```
type Gender = "Male" | "Female" | "Other"

function checkGender(gender: Gender) {
    return `You are ${gender}`
}
console.log(checkGender("Male")) // Output: "You are Male"

console.log(checkGender("BTS")) // Error: Argument of type '"BTS"' is not assignable to parameter of type 'Gender'
```

The `Gender` type can be one of three string values: `Male`, `Female`, or `Other`. This is a `union type` because it allows multiple types (or values) but only one at a time.

`Using any string value other than these three string values ​​will result in a TypeScript error.`

- Intersection type Examples:

```
  type User = {
    name: string;
    age: number;

  }

  type IsMarried = {
      isMarried : boolean;
  }

  type Student = User & IsMarried

  const student1: Student = {
     name: "Mukit",
     age: 24,
     isMarried : false

  }
    const student1: Student = {
     name: "Mukit",
     age: 24,

  }
   //TypeScript Error: Property 'isMarried' is missing in type '{ name: string; age: number; }' but    required in type 'IsMarried'.`
```
