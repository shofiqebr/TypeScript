{
 class Person {
    getSleep(){
        console.log(`I am sleeping for 8 hours`)
    }
}
class Student extends Person {
   getSleep() {
       console.log(`I am sleeping for 7 hours`)
   }
}
class Developer extends Person {
   getSleep() {
       console.log(`I am sleeping for 6 hours`)
   }
}

const getSleepingHours = ( param : Person) => {
    param.getSleep()
}

const person1 = new Person ()
const person2 = new Student ()
const person3 = new Developer ()

getSleepingHours(person1)
getSleepingHours(person2)
getSleepingHours(person3)


class Shape {
    getArea() : number {
      return 0 ;
    }
}
class Circle extends Shape {
    radius : number;

    constructor ( radius : number){
        super()
        this.radius = radius
    }
    getArea() : number {
      return Math.PI * this.radius *this.radius
    }
}
class Rectangle extends Shape {
    hieght : number;
    width : number;

    constructor ( hieght : number, width : number){
        super()
        this.hieght = hieght
        this.width = width
    }
    getArea() : number {
      return this.hieght* this.width
    }
}

const getShapArea = (param : Shape ) => {
    console.log(param.getArea())
}
const shape1 = new Shape()
const shape2 = new Circle(19)
const shape3 = new Rectangle(29,44)

getShapArea(shape3)
}