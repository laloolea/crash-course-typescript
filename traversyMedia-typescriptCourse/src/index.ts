let id:number  = 3;
let company : string = 'Lalo';
let isPublished : boolean = true;
let x : any = 'Hello';

x=true;

let ids: number[] = [1,2,3,4,5];// if you add something is not that type it will break

//Tuple
let person :[number,string,boolean]=[1,"Lalo",false];

//Tuple array
let employee:[number,string][];
employee=[
    [1,"Lalo"],
    [2,"jaja"],
    [3,"lala"]
];
//union can be both types
let pid: string | number;

//Enum
enum Direction1{UP,DOWN,LEFT,RIGHT}

//Objects
type User = {
    id:number,
    name:string
}
const user:User = {
    id:1,
    name:'Lalo'
}
//Type Assertion
let cid : any =1;
//let customerId =<number>cid;
let customerId = cid as number; //To change the type in assignation
//Functions
function addNum(x:number,y:number):number{
    return x+y;
}

console.log(addNum(1,5));

function log(message:string|number):void{
    console.log(message);
}
log("2");

//Interfaces
//They dont work in primitive types, usually used for objects
interface UserInterface  {
    readonly id:number, //ReadOnly you cant change the value
    name:string,
    age?:number //? is for make a attribute optional
}

const user1: UserInterface={
    id:1,
    name:'lalo'
}

type Point = number | string;
const p1: Point = 1;

interface MathFunc{
    (x:number,y:number):number
}
const add: MathFunc = (x:number,y:number):number =>x+y;
const substract: MathFunc = (x:number,y:number):number =>x-y;

interface PersonInterface  {
    id:number, //ReadOnly you cant change the value
    name:string,
    age?:number //? is for make a attribute optional
    register():string
}

//Classes!!!
class Person implements PersonInterface  {
    id:number
    name:string
    constructor(id:number,name:string){
       this.id = id;
       this.name = name;
    }
    register(){
        return `${this.name} is now registered`;
    }
}


const lalo = new Person(1,"lalo");
//lalo.id =5;//You cant do this if is private  is only accesible by the class,same for protected that case only the class or whatever class that is extended from that class, for Public everyone can access
//console.log(lalo.register());

class Employee extends Person{
    position:string;
    constructor(id:number,name:string,position:string){
        super(id,name);// this call the constructor from the parent class
        this.position = position;
    }
}

const emp  = new Employee(3,"Shawn",'Developer');

console.log(emp.register());

//Generics !!
function getArray<T>(items:T[] ): T[]{
    return new Array().concat(items);
}

//Reminded me to overload functions in C 
let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(["Lalo","Pedro","Jaime"]);

strArray.push('hello');