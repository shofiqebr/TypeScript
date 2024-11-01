{
// nullable type

const searchName = ( value : string | null)=>{
    if (value) {
        console.log('searching')
    }else{
        console.log('nothing to show')
    }
}
searchName('null')



}