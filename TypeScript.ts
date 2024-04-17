// Type alias: it is used to create custom types

// syntax

type User = {
  name: string;
  age: number;
  address?: string;
};

// ? is used to make it optional

const user: User = {
  name: "Salman",
  age: 22,
};

// voide shows the partucular function is not return any thing
const login = (userData: User): User => {
  return userData;
};

// console.log(login({name: "Salman", age: 20}))

type ID = number | string;

// ---------------------------------------------------------------

// Interfaces

interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}

interface BankAccount {
  accountNumber: number;
  accontHolder: string;
  balance: number;
  isActive: boolean;
  transactions: Transaction[]; // it shows inside the transactions there is array type of Transactions.
}

const transaction1: Transaction = {
  payerAccountNumber: 123,
  payeeAccountNumber: 455,
};

const transaction2: Transaction = {
  payerAccountNumber: 455,
  payeeAccountNumber: 888,
};

const BankAccount: BankAccount = {
  accountNumber: 123,
  accontHolder: "Salman",
  balance: 4000,
  isActive: true,
  transactions: [transaction1, transaction2],
};

// Use two interfaces

// Extend

interface Book {
  name: string;
  price: number;
}

interface EBook extends Book {
  // name: string;
  // price: number;
  fileSize: number;
  format: string;
}

interface AudioBook extends EBook {
  // name: string;
  // price: number;
  // fileSize: number;
  // format: string;
  duration: number;
}

const book: AudioBook = {
  name: "Atomic habits",
  price: 1200,
  fileSize: 300,
  format: "pdf",
  duration: 4,
};

// Merging

interface Books {
  name: string;
  price: number;
}

interface Books {
  size: number;
}

// if there is a interface with same name then it will merge those interfaces.

const books: Books = {
  name: "Automic",
  price: 222,
  size: 22,
};

// Union

type Id = number | string;

const printId = (id: Id) => {
  // Narrowing
  if (typeof id === "string") {
    // console.log(id.toUpperCase())
  } else {
    // console.log(id)
  }
};

printId("lower to upper");

// Convert ts to js: cmd: tsc file_name

const getFirstThree = (x: string | number[]) => {
  return x.slice(0, 3);
};

// console.log(getFirstThree("hello"))
// console.log(getFirstThree([1,2,3,4,5]))

// -----------------------------------------------------------------------------------

// Generics

const logString = (arg: string) => {
  console.log(arg);
  return arg;
};

const logNumber = (arg: number) => {
  console.log(arg);
  return arg;
};

const logArray = (arg: any) => {
  console.log(arg);
  return arg;
};

const logAnything = <T>(arg: T): T => {
  console.log(arg);
  return arg;
};

// logString("Hello");
// logNumber(333);
// logArray([4,3,5])
// logAnything([4,3])
// logAnything("hello")

interface HasAge {
  age: number;
}

const getOldest = <T extends HasAge>(people: T[]): T => {
  return people.sort((a, b) => b.age - a.age)[0];
};

const people = [{ age: 30 }, { age: 40 }, { age: 10 }];

interface Player {
  name: string;
  age: number;
}

const players: Player[] = [
  { name: "john", age: 30 },
  { name: "sr", age: 44 },
  { name: "Hola", age: 99 },
];

// console.log(getOldest(players).age)

// Assertion

// const person = getOldest(players) as Player

// const person = getOldest(players)
// console.log(person)

// Generics


interface IPost {
  title: string;
  id: number;
  description: string;
}

interface IUser {
  id: number;
  name: string;
  age: number;
}

// async function always return promise

const fetchPostData = async (path: string): Promise<IPost[]> => {
  const response = await fetch(`http://example.com${path}`)
  return response.json()
}

const fetchUsersData = async (path: string): Promise<IUser[]> => {
  const response = await fetch(`http://example.com${path}`)
  return response.json()
}


const fetchData = async <ResultType>(path: string): Promise<ResultType> => {
  const response = await fetch(`http://example.com${path}`)
  return response.json()
}

(async () => {
  const posts = await fetchPostData("/post")
  const user = await fetchUsersData("/users")
  const users = await fetchData<IUser[]>('/users')
  // users[0].
})()