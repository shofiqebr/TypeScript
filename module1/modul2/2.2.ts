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



}