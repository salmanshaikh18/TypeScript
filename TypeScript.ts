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

console.log(login({name: "Salman", age: 20}))

type ID = number | string
