//You could do this but it is better to let ts to infer which type it is 
// const person:{
//     name:string;
//     age:number;
//     hobbies:string[];
//     role:[number,string];
// }={
//     name : 'Maximilian',
//     age: 30,
//     hobbies:['Sports','Cooking'],
//     role:[2,'author']
// };
// const ADMIN = 0;
// const Read_Only = 1;
// const AUTHOR= 2;
enum Role{ADMIN,READ_ONLY,AUTHOR}
const person = {
    name : 'Maximilian',
    age: 30,
    hobbies:['Sports','Cooking'],
    role: Role.ADMIN
};
//person.role.push("admin");
//person.role[1] = 10;
let favoriteActivities:string [];
favoriteActivities=['Sports'];
console.log(person.role);
console.log(person.name);

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    
}
if(person.role===Role.ADMIN){
    console.log('is admin ');
}