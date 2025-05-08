// Problem 1:
function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }
  
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
console.log(formatString("Shakil", true));

// Problem 2: 

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
  return items.filter(item => item.rating >= 4);
}

const books = [
  {title: "Book A", rating: 4.5},
  {title: "Book B", rating: 3.2},
  {title: "Book C", rating: 5.0},
];

const filterBooks = filterByRating(books);
console.log(filterBooks);

// Problem 3: 
function concatenateArrays<T>(...arrays: T[][]): T[]{
  return [].concat(...arrays);
}
console.log(concatenateArrays(["a", "b"], ["c"]));  
console.log(concatenateArrays([1, 2], [3, 4], [5]));

// Problem 4: 

class Vehicle{
  private make: string;
  private year: number;

  constructor(make: string, year: number){
    this.make = make;
    this.year = year;
  }
  public getInfo(): string{
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle{
  private model: string;

  constructor(make: string, year: number, model: string){
    super(make, year);
    this.model = model;
  }

  public getModel(): string{
    return `Model: ${this.model}`
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());

// Problem 5: 

function processValue(value: string | number): number{
  if(typeof value === 'string'){
    return value.length;
  }else{
    return value * 2;
  }
}

console.log(processValue("hello"));
console.log(processValue(10));  

// Problem 6: 

interface Product {
  name: string;
  price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null{
  
}
