let valuestring = "king";
let valuestring2 = "salve";
let number1 = 73;
let number2 = 8;
let arry=["father","mother","childrens"];

console.log('is valuestring === valuestring2? i predict false');
console.log(valuestring === valuestring2 );

console.log('is valuestring !== valuestring2? i predict true');
console.log(valuestring === valuestring2 );

console.log('is King lower case? i predict false');
console.log(valuestring.toLowerCase() === "King" );

console.log('is number1 == number2? i predict false');
console.log(number1 == number2 );

console.log('is number1 != number2? i predict true');
console.log(number1 != number2 );

console.log('is number1 > number2? i predict true');
console.log(number1 > number2 );

console.log('is number1 < number2? i predict fales');
console.log(number1 < number2 );

console.log('is number1 >= number2? i predict true');
console.log(number1 >= number2 );

console.log('is number1 <= number2? i predict false');
console.log(number1 <= number2 );

console.log('is number1 > number2 or < 10? i predict true');
console.log(number1 >number2 || number1 > 10 );

console.log('is number2 > number1 and < 10? i predict false');
console.log(number2 > number1 && number2 < 10 );

console.log('is father in side the arry? i predict true');
console.log(arry.includes("father"));

console.log('is aunty inside the arry or not? i predict false');
console.log(arry.includes("aunty"));

