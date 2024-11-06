

{

// type assertion

let anything : any  ;

anything= 'next level developer';
anything = 333 ;

(anything as number).toString



const KgToGram = ( value : number | string| undefined) => {
    if ( typeof value === 'number'){
        return value* 1000
    }
    if(typeof value === 'string') {
        const convertedValue = parseFloat(value)*1000
        return `The converted value : ${convertedValue}`
    }
}

const result1 = KgToGram(1000) as number;
const result2 = KgToGram('1000') as string;


type CustomError = {
    message : string
}
try{

}catch(error){
    console.log((error as CustomError).message);
    
}




}