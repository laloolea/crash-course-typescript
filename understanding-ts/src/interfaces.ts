//type AddFn = (a:number,b:number)=>number;
//Interface for a function, anonymous function
interface AddFn{
    (a:number,b:number):number;
}

let add:AddFn;

add=(n1:number,n2:number)=>{
    return n1+n2;
}

interface Named{
    readonly name?:string;
    outputName?:string;
}

interface Greetable extends Named {
    greet(phrase:string):void;
}

class Person implements Greetable{
    name?:string
    //age:number;
    constructor(name?:string){
        this.name=name;
        //this.age = age;
    }

    greet(phrase: string) {
        if(this.name){
            console.log(phrase + ' '+ this.name);
        }else{
            console.log('Hi');
        }
    }
}
let user1:Greetable;

user1 = new Person();

user1.greet("Hi there - I am");
