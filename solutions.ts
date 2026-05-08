// 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};


// 2
const reverseString = (text: string): string => {
  const reverseText = text.split("").reverse().join("");
  return reverseText;
};

// 3
type StringOrNumber = string | number;
const checkType = (value: StringOrNumber) => {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
};


// 4
const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

// 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
// const toggleReadStatus = <T extends Book>(book: T) => {
const toggleReadStatus = <T extends Book>(book: T) => {
  return {
    ...book,
    isRead: true,
  };
};

// 6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// 7
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((num) => arr2.includes(num));
};
