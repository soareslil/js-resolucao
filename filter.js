let products = [
    {name: 'banana', type: 'vegetable'},
    {name: 'apple', type: 'vegetable'},
    {name: 'watermelon', type: 'fruit'},
    {name: 'orange', type: 'fruit'},
];

let result = products.filter(function(product){
    return product.type === 'fruit';
}); 

console.log(result);

