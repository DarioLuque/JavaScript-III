    
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding: When we use 'this' keyword inside global scope we are binding to the window.
* 2. Implicit Binding: When using dot notation, anything that is to the left is "this". Refers only to the scope we're working in.
* 3. Explicit Binding: When using functions to bind, apply, or call properties and attach to a function or object.
* 4. New Binding: When a constructor function is in use, this is refering to a specific instance of the object that is created and returned 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myLilAnimal(age){
    console.log(this);
    return age;
};
console.log(myLilAnimal("lil pup"));

// Principle 2

// code example for Implicit Binding
const person = {
    name: "Dario",
    age: 27,
    location: "San Bernardino, CA",
    myHobby: function (){
        return `${this.name} makes music and is from ${this.location}`
    }
}
console.log(person.myHobby());

// Principle 3
function myInfo(info){
    this.name = info.name;
    this.age = info.age;
    this.speak = function () {
        return `I am ${this.age} years old`
    } 
}
const Dario = new myInfo ({
    name: "Dario",
    age: 27
})
console.log(Dario.speak())
// code example for New Binding

// Principle 4
// code example for Explicit Binding

const sayName = function (inst1, inst2, inst3) {
    console.log(`My name is ${this.name} and I play  ${inst1}, ${inst2}, and ${inst3}`)
};

const firstName = {
    name: 'Dario'
};

const instruments = ['Guitar', 'Keys', 'Ukulele.'];

console.log(sayName.apply(firstName, instruments));