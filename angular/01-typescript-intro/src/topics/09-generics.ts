export function whatsMyType<T>(argument: T): T {


    return argument
}


const amIString = whatsMyType<string>("hola mundo")
const amINumber = whatsMyType<number>(100)
const amIArray = whatsMyType<number[]>([1, 2, 3, 4])

console.log(amIString.split(" "))
console.log(amIArray.join("-"))
console.log(amINumber.toFixed())
