
// let a = fetch("https://goweather.herokuapp.com/weather/ny")

// a.then((value)=>{
//     console.log(value.status)
//     console.log(value.ok)
//     return value.json()
// }).then((value2)=>{
//     console.log(value2)
// })

// let a = {
//     name1: "harry",
//     language: "JavaScript",
//     run: ()=>{
//         alert("selfrun")
//     }
// }

// console.log(a)

// let p = {
//     run: ()=>{
//         alert("run")
//     }
// }

// .p__proto__ = {
//     name: "jackie"
// }
// a.__proto__ = p
// a.run()
// console.log(p)



// class railwayForm {
//     submit(){
//         alert(this.name + ": your form has been Submitted with train number " + this.trainNo)
//     }
//     cancel(){
//         alert(this.name + ": your form has been cancelled with train number " + this.trainNo)
//     }
//     fill(name,trainNo){
//         this.name = name
//         this.trainNo = trainNo
//     }
// }

// let uddeshya  = new railwayForm()
// uddeshya.fill("Uddeshya",223455)

// let shanu  = new railwayForm()
// shanu.fill("shanu",223420)

// uddeshya.submit()
// shanu.submit()
// uddeshya.cancel()

// class railwayForm {
//     constructor(name,trainno,address){
//         console.log("constructor called")
//         this.name = name
//         this.trainno = trainno
//         this.address = address
//     }

//     preview(){
//         alert(this.name + "your form is on preview")
//     }
//     submit(){
//         alert(this.name + "your form has been submitted with trainno" + this.trainno + "for the address" + this.address)
//     }
//     cancel(){
//         alert(this.name + "your form has been cancelled")
//         this.trainno = null
//     }
// }

// let harry = new railwayForm("harry", 334566, "bihar")
// let rohan = new railwayForm("rohan", 312466, "dehradun")

// harry.submit()
// rohan.submit()
// harry.cancel()

// class animal{
//     constructor(name,color){
//         this.name = name
//         this.color = color
//     }
//     run(){
//         console.log(this.name + " is Running")
//     }
//     shout(){
//         console.log(this.name + " is Shouting")
//     }
// }

// class monkey extends animal{
//     eatBanana(){
//         console.log(this.name + " is eating" + " " + this.color)
//     }
// }

// let ani = new animal("bruno","brown")
// let m = new monkey("chimpu","orange")

// ani.shout()
// m.eatBanana()

// class Animal{
//     constructor(name,color){
//         this.name = name
//         this.color = color
//     }
//     run(){
//         console.log(this.name + " is " +  this.color + " in color")
//     }
// }

// class Monkey extends Animal{
//     eatBanana(){
//         console.log(this.name + "loves to eat banana")
//     }
// }

// let ani = new Animal("bruno","brwon")
// let mon = new Monkey("chimpu","orange")

// mon.run()

// class Employee{

//         login(){
//             console.log(`Employee logged in`)
//         }

//         logout(){
//             console.log(`Employee logged out`)
//         }

//         requestLeaves(leaves){
//             console.log(`Employee has requested ${leaves} leaves (One extra)`)
//         }
// }

// class Programmer extends Employee{
//     requestCoffee(coffee){
//         console.log(`Employee has requested ${coffee} Coffee`)
//     }
//     requestLeaves(leaves){
//         // console.log(`Employee has requested ${leaves + 1} leaves (One extra)`)
//         super.requestLeaves(`${leaves}`)
//     }
// }

// let Shanu = new Programmer()
// let Uddeshya = new Employee()

// Shanu.login()
// // Shanu.requestLeaves(2)
// Uddeshya.requestLeaves(5)

// class Employee{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     login(){
//         console.log(this.name + " has logged in")
//     }
//     logout(){
//         console.log(this.name + " has logged out")
//     }
//     requestLeave(leaves){
//         console.log(this.name + ` requested ${leaves} leaves`)
//     }
// }

// class Programmer extends Employee{
//     requestCoffee(){
//         console.log(this.name + ` requested a coffee`)
//     }
//     requestLeave(leaves){
//         // console.log(this.name + ` requested ${leaves + 1} leaves`)
//         super.requestLeave(`${leaves}`)
//     }
// }

// let Uddeshya = new Employee("Uddesh",25)
// let Shanu = new Programmer("hell",21)

// Shanu.requestCoffee(1)

// let a =()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(233)
//         }, 2000);
//     })
// }

// (async ()=>{
//     let b = await a()
//     console.log(b)
//     let c = await a()
//     console.log(c)
//     let d = await a()
//     console.log(d)
// })()

// let obj = {
//     name: "uddeshya",
//     company: "Web coder",
//     address: "xyz"
// };

// console.log({name:"harry",roll:"developer",...obj})

// function udd(){
//     var name = "Uddeshya"
//     function shanu(){
//         console.log(name)
//     }
//     name = "Dharmendra"
//     shanu()
// }
// udd()

// function returnFunc(){
// const x = ()=>{
//     let a = 1
//     console.log(a)
//     const y = ()=>{
//         // let a = 2
//         console.log(a)
//         const z = ()=>{
//             // let a = 3
//             console.log(a)

//         }
//         z()
//     }
//     a = 99
//     y()
// }
// return x
// }

// let a = returnFunc()
// a()

// const x = {
//     name: "Uddeshya",
//     role: "Developer",
//     exp: 30 ,

//     show: function(){
//         let that = this
//         setTimeout(()=>{
//             console.log(this)
//         console.log(`The name is ${this.name} the role is ${this.role} with the ${this.exp} years of experience `)
//     },2000)
//     //     setTimeout(function(){
//     //         // console.log(this)
//     //     console.log(`The name is ${that.name} the role is ${that.role} with the ${this.exp} years of experience `)
//     // },2000)
//     }
// }

// x.show()

// const cars = ['volvo','maruti','suzuki','honda']

// let x = ""
// for (let i = 0;i < cars.length; i++){
//     x + cars(i)
// }

// console.log (x)

const names = {
    uddeshya: 'rawat',
    shanu: 'patidar'
}

// for (let i = 0; i < num.length; i++){
//     console.log(num[i])
// }

// num.forEach ((element)=>{
//     console.log(element*element)
// })

let vashu = ()=>{
    return "hello"
}

let x = [1,2,3,4,'uddeshy']
x.shift()
x.push(vashu())
console.log(x)

