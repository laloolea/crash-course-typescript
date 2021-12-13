// let userInput : unknown;
// let userName: string;

// userInput = 5;
// userInput='Max';
// if(typeof userInput ==='string'){
//     userName=userInput;
// }
 
// function generateError(message:string,code:number):never{
//     throw { message:message,errorCode:code };
   
// }

// generateError("An error ocurred!",500);


const button = document.querySelector("button");

function clickHandler(message:string){
    console.log("clicked!");
}
//A way to avoid null parameters
if(button){
    button.addEventListener("click",clickHandler.bind(null,
        'You'));
}

