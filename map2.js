let cars = [
    {model: 'buick', price: 'cheap'},
    {model: 'camaro', price: 'expensive'}
]

let prices = cars.map(function(car){
    return car.price;
})

console.log(prices);