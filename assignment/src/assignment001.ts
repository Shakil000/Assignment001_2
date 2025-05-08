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