{
// ternary operator

const age = 16 ;
if (age> 18 ){
    console.log ('adult')
}else{
    console.log('not adult')
}

const isAdult = age>=18 ? 'adult' : 'not adult'
console.log([isAdult])


// nullish coalescing operator
// null and undefined
// 

const isAuthenticated = null

const result1 = isAuthenticated ?? 'Guest'
console.log(result1)


type User = {
    name : string;
    address : {
        city: string;
        present: string;
        permanent?: string;
    }
}
const user: User = {
    name : 'shofiq',
    address: {
        present: 'adjfkls',
        city: 'dka'
    }
}

const parmanenAddress = user?.address?.permanent ?? 'no one'

console.log([parmanenAddress])

}

