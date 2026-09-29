// const a = 10;
// const b = 30; 

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a ** 3);

let num = 10;
// const inc = num++;
const inc = ++num;
console.log(inc, num);

let n = 10;
// const d = n--;
const d = --n;
console.log(d, n);

console.log(5 <= 10);

// const a = 10;
// const b = 20;
// const c = 30;

// if (a > b && a > c){
//     console.log("a is greater");
// }else if(b > c){
//     console.log("b is greater");
// }else{
//     console.log("c is greater");
// }


const day = 2;
switch (day) {
    case 0:
        console.log("MONDAY");
        break;
    case 1:
        console.log("TUESDAY");
        break;
    case 2:
        console.log("WEDNESDAY");
        break;
    default:
        console.log("invalid input");
}

