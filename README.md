
## 1.	What are some differences between interfaces and types in TypeScript?

Ans: In TypeScript, both `interface` and `type` are used to define the shape of data, but they have some key differences:

### ✅ **1. Extensibility**

* **Interface**: Can be extended multiple times (declaration merging).

  ts
  interface A { x: number }
  interface A { y: number } // Merges with the first A

* **Type**: Cannot be merged. You must use intersection (`&`) for extension.

  ts
  type A = { x: number }
  // type A = { y: number }  // ❌ Error: Duplicate identifier

### ✅ **2. Extending Other Types**

* **Interface**: Can extend interfaces and, starting from TS 2.7+, also `type` aliases that resolve to object types.

  ts
  interface B extends A {}

* **Type**: Can extend via intersections with any type (including unions, primitives, etc.).

  ts
  type C = A & { z: string };


### ✅ **3. Use Cases**

* **Interface**: Preferred for defining the shape of objects or classes.
* **Type**: More flexible — can define unions, intersections, primitive aliases, etc.

  ts
  type Primitive = string | number | boolean;


### ✅ **4. Implementation with Classes**

* Only **interfaces** can be implemented by classes.

ts
  interface Printable { print(): void }
  class MyPrinter implements Printable {
    print() { console.log("Printing...") }
  }

### ✅ **5. Readability & Tooling**

* **Interfaces** are generally better supported by tools like editors and linters for OOP patterns.

### Summary Table:

| Feature                         | `interface`              type                              |
| ------------------------------- | ------------------------ | ----------------------------------- |
| Extensible (declaration merge)  | ✅ Yes                    | ❌ No                                |
| Can define unions/intersections | ❌ No                     | ✅ Yes                               |
| Can extend other types          | ✅ Yes (interfaces/types) | ✅ Yes (via `&`)                     |
| Can implement in classes        | ✅ Yes                    | ❌ No                                |
| Best used for                   | Objects & Classes        | Anything (primitives, unions, etc.) |



## 2.	What is the use of the keyof keyword in TypeScript? Provide an example.

Ans:

`keyof` is a **type operator** that takes an object type and returns a **union of its keys** as string (or number) literal types.

### 📦 Basic Example:

```typescript
interface User {
  id: number;
  name: string;
  isAdmin: boolean;
}

type UserKeys = keyof User;
// Result: "id" | "name" | "isAdmin"

So now, `UserKeys` is a union of literal types — `"id" | "name" | "isAdmin"`.

You can use this to **restrict values or parameters to only those keys**.

## ⚙️ Example: Safe Property Access Function

### 🛑 Without keyof (unsafe):

typescript
function getValue(obj: any, key: string) {
  return obj[key]; // No type safety
}

This compiles, but doesn't help you if `key` is invalid.

### ✅ With `keyof` (type-safe):

typescript
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

### 🧪 Usage:

typescript
const user = {
  id: 101,
  name: "Alice",
  isAdmin: true
};

const name = getValue(user, "name");  // ✅ OK, type is string
const id = getValue(user, "id");      // ✅ OK, type is number
// const wrong = getValue(user, "age"); // ❌ Error: "age" is not a key of user

## 🧰 keyof with typeof

You can combine `keyof` with `typeof` to dynamically infer keys from a value:

typescript
const settings = {
  theme: "dark",
  layout: "grid",
  notifications: true
};

type SettingsKey = keyof typeof settings;
// "theme" | "layout" | "notifications"

Now you can write a function that only accepts keys from `settings`:

typescript
function updateSetting(key: SettingsKey, value: string | boolean) {
  console.log(`Updating ${key} to ${value}`);
}

updateSetting("theme", "light");         // ✅ OK
updateSetting("notifications", false);   // ✅ OK
// updateSetting("sound", true);         // ❌ Error: "sound" not a key

## 🎯 Why use `keyof`?

* Ensures **type safety** when accessing object properties.
* Enables **generic utility functions** like getters, updaters, mappers.
* Avoids hardcoding strings — **helps with refactoring**.

