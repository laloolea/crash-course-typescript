abstract class Department{
    // private readonly id:string;
    // private name: string;
    static fiscalYear=2021;
    protected employees:string[]=[];
    constructor(protected readonly id:string,private name:string){
        // this.id = id;
        // this.name=n;//this refeer to the instance responsible to call the method 
    }
    static createEmployee(name:string){
        return {name:name};
    }

    abstract describe (this: Department):void;
        
    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department{
    //admins:string[]
    constructor(id:string,public admins: string[]){
        super(id,'IT'); 
    }  
    
    describe() {
        console.log('IT department - ID: '+ this.id);
    }
}

class AccountingDepartment extends Department{
    private lastReport:string;
    private static instance : AccountingDepartment;

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error("Not report found")
    }
    set mostRecentReport(value:string){
        if(!value){
            throw new Error("Please pass in a valid report");
        }
        this.addReport(value);
    }
    private constructor(id:string,private reports: string[]){
        super(id,'Accounting');
        this.lastReport=reports[0];
    }   
    
    static getInstance(){
        if(AccountingDepartment.instance){
            return this.instance;
        }
        this.instance= new AccountingDepartment('d2',[]);
        return this.instance;
    }

    describe(){
        console.log("Accounting Department - ID " + this.id);
    }
    addEmployee(name:string){
        if(name==='Max'){
            return;
        }
        this.employees.push(name);

    }

    addReport(text:string){
        this.reports.push(text);
        this.lastReport=text;
    }
    getReports(){
        console.log(this.reports);
    }
}

const employee1=Department.createEmployee('Max');
//console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1",['Max']);

it.addEmployee("Lalo");
it.addEmployee("jesu");
//it.employees[0]="jesus"; //Cant do this because the attribute is private!
it.describe();

//const accounting = new AccountingDepartment("d2",[]); //with a regular constructor
//with a private constructor will be
const accounting = AccountingDepartment.getInstance(); //only one even that you create different const
accounting.describe();

accounting.mostRecentReport = "Reporte mas reciente";
accounting.addReport("Something went wrong...");


accounting.addEmployee("Max");
accounting.addEmployee("manu");

//accounting.getReports();
accounting.mostRecentReport;
//accounting.printEmployeeInformation();
//const itCopy =  {name:'s',describe: it.describe};

//itCopy.describe(); //if we want to use it we need to match all the attributes and methods it has 