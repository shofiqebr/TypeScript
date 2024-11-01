// learning functions
// normal function
// arrow function

 function add (num1 : number, num2 : number):number{
    return num1+num2
 }

 add(3,5)

 const addarrow = ( num1: number, num2 : number): number => num1+ num2
// object  function  method

 const regularUser = {
    name : 'tawfiq',
    balance : 2883,
    addBalance( balance : number): number{
       return this.balance + balance
    }
 }
 const regularUser1 = {
    name : 'tawfiq',
    balance : 2883,
    addBalance( balance : number):string{
       return `my balance :  ${this.balance + balance}`
    }
 }


//  map a array

const arr: number[] = [2,4,6]

const squrearr : number[] = arr.map((elm: number): number=> elm* elm)
