let male: boolean = true;
let num: number = 1;
let str: string = "Hello World";

let hello = "Hello";

//object

// interface way

// interface personDT {
//   name: string;
//   age: number;
//   gender: string;
//   position: string;
//   hello?: "Hello";
// }
// type way

type personDT = {
  name: string;
  age: number;
  gender: string;
  position: string;
  hello?: "Hello";
};

type NRC = {
  nation: string;
};

let person: personDT & NRC = {
  name: "Kyaw",
  age: 21,
  gender: "male",
  position: "Fronted Developer",
  nation: "Myanmar",
};
// console.log(person.name);

const sum = (x: number, y: number): number => {
  return x + y;
};
console.log(sum(2, 5));
// console.log(sum("2", 5)); it may be error-- number 2 was written with string TYPE
