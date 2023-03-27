//create an array of numbers 

// create a variable to hold the sum

// loop over the array, incrementing the sum variable

// print the sum variable

let numbers = [1,2,3,4,5];

let sum = 0;

numbers.forEach(function(number){
    sum += number;
});

console.log(sum);

function adder(number){
   return sum += number;
}

let anotherWay = numbers.forEach(adder);

console.log(sum);
