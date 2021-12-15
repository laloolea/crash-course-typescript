//const userName = "Max";
//let is only available block scope: A variable or const is only available in the block which they defined it or in lower block  so it forces you to write cleaner code
//let age = 30;
//age = 29;

// const add = (a:number,b:number=1)=>a+b;

// const printOutput:(a:number|string)=>void = output =>console.log(output); 

// const button = document.querySelector("button");

// if(button){
//     button.addEventListener('click',event=>console.log(event));
// }

// printOutput(add(4));

const hobbies = ['Sports','Cooking',"Dancing","wow"];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies)
//console.log(activeHobbies);

const person = {
    firstName: 'lalo',
    age:30
};

console.log(person);
//This is a perfect copy
const copiedPerson = {...person};
//const copiedPerdon=person// just copy the pointer 
console.log(copiedPerson);
// copiedPerson.age=10;
// console.log(copiedPerson);

const add = (...numbers:number[]) =>{
    return numbers.reduce((curResult,curValue)=>{
        return curResult+curValue;
    },0);
};
const addedNumbers=add(5,5,2,3);
console.log(addedNumbers);

// const hobby1=hobbies[0];
// const hobby2=hobbies[1];
//same as the next line
const [hobby1,hobby2,...remainingHobbies] = hobbies;
console.log(hobbies);

const {firstName:userName,age} = person; 

console.log(userName,age,person);