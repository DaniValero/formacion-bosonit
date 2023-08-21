
function addNumbers(a: number, b: number): number {

    return a + b;


}

const addNumbersArrow = (a: number, b: number): number => {
    return a + b
}


const result = addNumbers(1, 2)
const result2 = addNumbersArrow(1, 2)


// console.log({result, result2})


interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;


}

const strider: Character = {
    name: "strider",
    hp: 50,
    showHp() {
        console.log(`puntos de vida ${this.hp}`)
    },
}

healCharacter(strider, 10)

strider.showHp()


export {}