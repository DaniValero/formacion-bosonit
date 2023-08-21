
import {Product, taxCalculation} from "./06-function-destructuring"

const shoppingCart: Product[] = [
    {
        description: "iPad Air",
     price: 250
    },
    {
        description: "iPhone",
        price: 400
    }
]

const [total, totalTax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15
})

console.log(total)

