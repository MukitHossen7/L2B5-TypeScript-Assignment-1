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

  }
```

#### Typescript give this Error: Duplicate identifier 'User'
