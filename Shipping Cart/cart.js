const shoppingCart = [
    { id: 1, name: 'Laptop', price: 800, quantity: 2 },
    { id: 2, name: 'Smartphone', price: 500, quantity: 1 },
    { id: 3, name: 'Tablet', price: 300, quantity: 3 },
    { id: 4, name: 'Headphones', price: 50, quantity: 2 }
];



//a) map Method: Calculate the total cost for each product


let totalCost = shoppingCart.map((item)=> ({
     id : item.id,
     name : item.name,
     price : item.price * item.quantity,
     quantity : item.quantity

}))
console.log(totalCost)


//b) filter Method: Filter products with a total cost greater than 1000

let products = totalCost.filter((product) => {
    return product.price > 1000;
})

console.log(products);


//c) reduce Method: Calculate the overall total cost of the shopping cart

let result = shoppingCart.reduce((total, cost) => 
     total = total + cost.price * cost.quantity, 0
)

console.log(result);

//d) sort Method: Sort products by quantity in descending order.

let sortItems = shoppingCart.sort((a, b)=>{
    return b.quantity-a.quantity;
})

console.log(sortItems);