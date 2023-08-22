
export interface Passenger {
    name: string;
    children?: string[];


}

const passenger1: Passenger = {
    name: "Dani",
}

const passenger2: Passenger = {
    name: "Pepe",
    children: ["María", "Juan"]
}

const printChildren = (passenger: Passenger) => {

    const howManyChildren = passenger.children?.length

    console.log(howManyChildren)
}

printChildren(passenger2)