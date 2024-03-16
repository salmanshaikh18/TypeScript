// Type alias: it is used to create custom types

// syntax

type User = {
    name: string;
    age: number;
    address?: string;
}

// ? is used to make it optional

const user: User = {
    name: "Salman",
    age: 22,
}

// voide shows the partucular function is not return any thing
const login = (userData: User): User => {
    return userData
}

// console.log(login({name: "Salman", age: 20}))

type ID = number | string


// ---------------------------------------------------------------

// Interfaces

interface Transaction {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber: number;
    accontHolder: string,
    balance: number;
    isActive: boolean;
    transactions: Transaction[] // it shows inside the transactions there is array type of Transactions.
}

const transaction1: Transaction = {
    payerAccountNumber: 123,
    payeeAccountNumber: 455,
}

const transaction2: Transaction = {
    payerAccountNumber: 455,
    payeeAccountNumber: 888
}

const BankAccount: BankAccount = {
    accountNumber: 123,
    accontHolder: "Salman",
    balance: 4000,
    isActive: true,
    transactions: [transaction1, transaction2]
};

// Use two interfaces

// Extend

interface Book {
    name: string;
    price: number;
}

interface EBook extends Book{
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
}


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
    size: 22
}



// Union

type Id = number | string

const printId = (id: Id) => {
    // Narrowing
    if (typeof id === "string") {
        console.log(id.toUpperCase())
    } else {
        console.log(id)
    }
}

printId("lower to upper")

// Convert ts to js: cmd: tsc file_name


const getFirstThree = (x: string | number[]) => {
    return x.slice(0, 3);
}


// console.log(getFirstThree("hello"))
console.log(getFirstThree([1,2,3,4,5]))
