function formatString(input: string, toUpper?: boolean): string {
  if (input && toUpper === false) {
    return input.toLocaleLowerCase();
  } else {
    return input.toLocaleUpperCase();
  }
}
// console.log(formatString("Hello")); // Output: "HELLO"
// console.log(formatString("Hello", true)); // Output: "HELLO"
// console.log(formatString("Hello", false)); // Output: "hello"

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filterRating = items.filter((item) => item.rating >= 4);
  return filterRating;
}
// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
//   { title: "Book D", rating: 5.5 },
//   { title: "Book E", rating: 3.9 },
//   { title: "Book F", rating: 4.0 },
//   { title: "Book G", rating: 4.1 },
// ];
// console.log(filterByRating(books));

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let concatenatesArrays: T[] = [];
  for (let array of arrays) {
    concatenatesArrays.push(...array);
  }
  return concatenatesArrays;
}
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
// console.log(concatenateArrays(["a", "b"], ["c"]));

class Vehicle {
  private make: string;
  private year: number;
  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}
class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel(): string {
    return `Model: ${this.model}`;
  }
}
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());
