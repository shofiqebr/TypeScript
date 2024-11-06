{
// genetic type

const roll : number[] = [1,2,34,5,6,]
const roll1 : Array<number> = [2,4,5,6,7]

const teachers : string[] = [ 'abte', 'bapti' , 'shapti']
const teachers2 : Array<string> = [ 'ove', 'shavi', 'kaci']


const isAvailable : boolean[] = [ true, false, false]
const isAvailable2 : Array<boolean> = [ false , true, false]


// genetic type dynamic

type GeneicArray<T> = Array<T>

const roll2 : number[] = [1,2,34,5,6,]
const roll3 : GeneicArray<number> = [2,4,5,6,7]

const teachers1 : string[] = [ 'abte', 'bapti' , 'shapti']
const teachers3 : GeneicArray<string> = [ 'ove', 'shavi', 'kaci']


const isAvailable1 : boolean[] = [ true, false, false]
const isAvailable3 : GeneicArray<boolean> = [ false , true, false]

// Array of object in generic

const user : GeneicArray<{ name: string , age : number}> = [
    { 
        name : 'anig',
        age : 49
    },
    {
        name : 'shofag',
        age : 949
    }
]

// generic tuple 

type GenericTuple <X,Y> = [ X, Y]

const UserWithId : GenericTuple <number, {name : string, email : string}> = [ 34909423,{ name : 'shofiq' , email : 'a@b.com'}]


}