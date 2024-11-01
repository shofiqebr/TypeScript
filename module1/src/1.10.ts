{
// union type

type User = {
    name : string;
    email? : string;
    gender : 'male' | 'female'
}

const tanjum : User = { 
    name : 'tanjum',
    gender : 'female'
}



// intersection type

type Bowler = {
    isBoling: boolean;
    fielding: string
} 

type Batsman = { 
    isBating : boolean;
    keeping: string
}

const liton : Bowler & Batsman = {
    isBoling: false,
    isBating: true,
    fielding: 'nice',
    keeping: 'cool'
}

}