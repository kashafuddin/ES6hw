// app.js  

import { add, subtract, multiply, divide } from './mathOperations.js';  

  
const output = document.getElementById('output');  

// 8. 
const a = 10;  
const b = 5;  

output.innerHTML += `<strong>Math Operations:</strong><br>`;  
output.innerHTML += `Addition: ${add(a, b)}<br>`; // 15  
output.innerHTML += `Subtraction: ${subtract(a, b)}<br>`; // 5  
output.innerHTML += `Multiplication: ${multiply(a, b)}<br>`; // 50  
output.innerHTML += `Division: ${divide(a, b)}<br><br>`; // 2  

// 9.  
const student = {  
    name: "John Doe",  
    age: 21,  
    grade: "A",  
    subjects: ["Math", "Science", "History"]  
};  

output.innerHTML += `<strong>Student Information:</strong><br>`;  
for (const property in student) {  
    output.innerHTML += `${property}: ${student[property]}<br>`;  
}  

// 10. 
const numbers = [1, 2, 3, 4];  
const squares = numbers.map(num => num ** 2);  
output.innerHTML += `<br><strong>Number Arrays:</strong><br>`;  
output.innerHTML += `Original array: ${numbers.join(', ')}<br>`;  
output.innerHTML += `Squared array: ${squares.join(', ')}<br>`;  

// 11.  
function operate(num1, num2, callback) {  
    return callback(num1, num2);  
}  

const addNumbers = (x, y) => x + y;  
const subtractNumbers = (x, y) => x - y;  

output.innerHTML += `<br><strong>Operate Function Results:</strong><br>`;  
output.innerHTML += `Operate (Addition): ${operate(10, 5, addNumbers)}<br>`; // 15  
output.innerHTML += `Operate (Subtraction): ${operate(10, 5, subtractNumbers)}<br>`; // 5  

// 12. 
setTimeout(() => {  
    output.innerHTML += `<br>Hello, World! (Displayed after 3 seconds)<br>`;  
}, 3000);  

// 13.  
const intervalId = setInterval(() => {  
    output.innerHTML += `<br>Current time: ${new Date().toLocaleTimeString()}`;  
}, 2000);  

setTimeout(() => {  
    clearInterval(intervalId);  
    output.innerHTML += `<br>Interval cleared.<br>`;  
}, 10000);  

// 14.   
function fetchData() {  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            resolve("Data received!");  
        }, 2000);  
    });  
}  

fetchData()  
    .then(response => {  
        output.innerHTML += `<br>${response}<br>`;  
    })  
    .catch(error => console.error(error));  

// 15. Async/Await example  
async function fetchDataAsync() {  
    try {  
        const response = await fetchData();  
        output.innerHTML += `<br>${response} (Using Async/Await)<br>`;  
    } catch (error) {  
        console.error(error);  
    }  
}  
n
fetchDataAsync();  

// 16. 
function exponentiate(base, exponent) {  
    return base ** exponent;  
}  

output.innerHTML += `<br><strong>Exponentiation:</strong><br>`;  
output.innerHTML += `2 raised to the power of 3: ${exponentiate(2, 3)}<br>`; // 8  

// 17.  
class Animal {  
    constructor(name, species) {  
        this.name = name;  
        this.species = species;  
    }  

    speak() {  
        return `${this.name} says ${this.species === 'Dog' ? 'Woof!' : 'Hello!'}`;  
    }  
}  

const dog = new Animal('Rex', 'Dog');  
const cat = new Animal('Mittens', 'Cat');  

output.innerHTML += `<br><strong>Animal Sounds:</strong><br>`;  
output.innerHTML += `${dog.speak()}<br>`; // Rex says Woof!  
output.innerHTML += `${cat.speak()}<br>`; // Mittens says Hello!  

// 18.   
function checkEvenOdd(number) {  
    return number % 2 === 0 ? "Even" : "Odd";  
}  

output.innerHTML += `<br><strong>Even or Odd Testing:</strong><br>`;  
output.innerHTML += `4 is ${checkEvenOdd(4)}<br>`; // Even  
output.innerHTML += `5 is ${checkEvenOdd(5)}<br>`; // Odd