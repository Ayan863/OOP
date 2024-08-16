// new task:
// Person classi yaradib ona name age ve surname verin daha sonra onun doğum ilini hesablayan class icinde bir function yazin
// Meselen age 20 verdiyimizde function 2004 nəticəsini versin
// Əlavə olaraq OOP ilə əlaqəli məqalələr atacam onlarada mütləq nəzər yetirin, uğurlar\
// debugger
class Person {
 constructor(name,surname,age){
    this.name=name
    this.surname=surname
    this.age=age
    this.birthYear=this.birthYearFunc(age)
    console.log(`${name}'s birthyear: ${this.birthYear}`); 
 }
 birthYearFunc(age){
    let date= new Date()
    let year = date.getFullYear()
    return year-age
 }
}
let person1 = new Person("Ayan","Ismayilzade",18)
console.log(person1);