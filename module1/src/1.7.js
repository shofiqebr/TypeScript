// spread operator
var student1 = ['rahim', 'kabul', 'labub'];
var student12 = ['rahim2', 'kabul2', 'labub2'];
var student = student1.push.apply(student1, student12);
console.log(student);
