let toys = [
    {
        id: 1,
        name: "Truck",
        maker: "Fischer Price",
        weightInPounds: 2,
        color: "Red",
        price: 7.99
    },
    {
        id: 2,
        name: "Teddy Bear",
        maker: "Beanie Baby",
        weightInPounds: 1,
        color: "brown",
        price: 4.99,
    },
    {
        id: 3,
        name: "Jack in the Box",
        maker: "Fischer Price",
        weightInPounds: 3,
        color: "Blue",
        price: 14.99
    }
]

let toy4 = {
    id: 4,
    name: "Monkeys in a Barrel",
    maker: "Lotz Toyz",
    weightInPounds: 3,
    color: "Red",
    price: 19.99
}

let toy5 = {
    id: 5,
    name: "Lego Set",
    maker: "Lego",
    weightInPounds: 5,
    color: "Multicolored",
    price: 9.99
}

toys.push(toy4)
toys.push(toy5)

console.log(toys);

for(let i of toys){
    console.log(i.name);
}

for(let i of toys){
console.log(`The ${i.color} ${i.name} costs $${i.price + i.price * 0.05}.`);
}


