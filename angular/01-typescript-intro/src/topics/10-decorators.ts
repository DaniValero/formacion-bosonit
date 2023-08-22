
function classDecorator() {
    
}


class SuperClass {
    public myProperty: string = "Abc123"

    print() {
        console.log("hola mundo")
    }
}

console.log(SuperClass)

const myClass = new SuperClass()
console.log(myClass)