export class Person {
    // public name: string;
    // private address: string;

    constructor(
        public name: string,
        private address: string = "No address"
    )
    {
        this.name = name;
        this.address = address;
    }

}


// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ) {
//         super( realName, "New York")
//     }


// }


export class Hero {

   

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
       
    }


}

const tony = new Person("Tony Stark", "New York")

const ironman = new Hero("Iron Man", 45, "Tony", tony);

console.log(ironman)

