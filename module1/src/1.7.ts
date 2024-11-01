// spread operator

const student1: string[] = ['rahim', 'kabul', 'labub']
const student12: string[] = ['rahim2', 'kabul2', 'labub2']

const student =student1.push (...student12)
console.log(student)



const teacher1 = {
    bangla: 'hashem',
    english: 'nasima',
    math: 'sanila'
}
const teacher2 = {
    bangla: 'hashem1',
    english: 'nasima1',
    math: 'sanila1'
}

const teacher = {
    ...teacher1,
    ...teacher2,
}


const greetFriend = (...friends : string[]) => {
    friends.forEach ((friend: string) => console.log(`$(friend)`))
}

greetFriend('abul', 'katom', 'kdjksj')