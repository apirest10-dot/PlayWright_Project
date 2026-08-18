 export class Employee{
    //property : datatype
    emid:number
    ename: string
    private  esalay:number
    eaddress: string
    email: string
   readonly offers: number
   static company= 'Qedge'
//create constructor for initialize values 
constructor(id:number,ename:string,salary:number,address:string,email:string,offers:number)
{
    this.emid=id
    this.ename=ename
    this.esalay=salary
    this.eaddress =address
    this.email= email
    this.offers =offers
   }
//write method
 empinfo():void{
console.log(`employe id ${this.emid} name is ${this.ename} salary ${this.esalay} address
     ${this.eaddress} email ${this.email} offer ${this.offers}`)
}
static displayCompanyName(){
        console.log(Employee.company);
    }
 }
//call employee class
const emp = new Employee(300,'Raju',5000,'ameerpet','test@gmail.com',9000)
 emp.empinfo()
 //calling static method
 Employee.displayCompanyName()
 



