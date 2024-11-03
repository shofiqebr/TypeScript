{

    
    interface User1 {
        name : string;
        age : number;
    }

    interface User1Withrole extends  User1{
        role : string;
    }
    
    const user : User1 = {
        name : 'abo',
        age : 3
    }

    const user3 : User1Withrole = {
        name : 'sl',
        age : 39,
        role : '39jn'
    } 
    
    type User2 = {
        name : string;
        age : number;
    }

    type UserWithRole2 = User2 &  {
        role : string ;
    }

    const user2 : User2 = {
        name : 'taie',
        age : 94
    }

    const user4 : UserWithRole2 = {
        name : 'kavi',
        age : 9,
        role: 'e9'
    }


    // array interface

 type Roll =number[]

    const roll : Roll   = [3,4,5]

    interface Roll1 {
        [index : number] : number
    }
    const role1 : Roll1 = [23,45, 434]


    // function interface

    type Add = (num1 : number , num2 : number ) => number
    const add : Add = ( num1 ,num2) => num1+ num2

    interface Add1 { 
        (num1 : number, num2 : number) : number
    }
    const add1 : Add1 = (num1 , num2) => num1+ num2
    
}