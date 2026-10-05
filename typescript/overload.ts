function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any) {
    return a + b;
}

console.log(add(2, 3));
console.log(add("hello", "hi"))



// generics
type User = {
    name: string,
    age: number,
    city: string
}

type Role = "admin" | "user" | "guest";

type Admin = {
    firstName: string,
    lastName: string,
    age: number,
    role: Role
}



const userData: User = {
    name: "karthik",
    age: 22,
    city: "malappuram"
}

const adminData = {
    firstName: "admin",
    lastName: "001",
    age: 22,
    role: "admin"
}

function getDetails<T>(details: T): T {
    return details;
}

const user = getDetails(userData);
const admin = getDetails(adminData);

console.log(user.name)
console.log(admin.role)