// ######### FUNCTION ############

// const var1="Audi"

// function add(){
//     const var1="Maruti"
//     console.log(var1)
// }
// add()
// console.log(var1);

// Anonymous Functions
// ###############################

// Function expression

// let show=function(){
//     console.log("Hello")
// }
// setTimeout(show,3000)


// setTimeout(function(){
//     console.log("Hello")
// },3000)

// ########################

// #############################
// Immediately Invoked Function

// (function (){
//     console.log("Hello");
//     alert("Hello")
// })();

// ######## OBJECTS #############

// let person = {
//     firstName: 'Bijit',
//     lastName : 'Das'
// }

// console.log(person)
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person['firstName'])

// #### OBJECT METHOD - this ###########

// let myName = {
//     firstName:'Bijit',
//     lastName : 'Das',
//     sayHello(){
//         console.log("Hello I am "+this.firstName+" and I have a "+car.brand+" "+ car.model)
//     }

// }

// let car = {
//     brand : 'Tesla',
//     model : 500
// }

// myName.sayHello()

// ####### MATH ########

// var x = 4.6
// console.log(Math.trunc(x));
// console.log(Math.max(3,4,5,1,7));
// console.log(Math.min(3,5,6,71,2));

// let n=Math.floor(Math.random()*10)+1; //Range (1-10)

// console.log(n);

// function getRandom(min,max){
//     let x=Math.floor(Math.random()*(max-min)) +min
//     return x
// }

// console.log(getRandom(10,20))


// ########## DATE ##########

// let x= new Date()
// console.log(x);

// let x1= new Date(1993,10,4,10,54,10)
// console.log(x1);

// ########### NEW ############

// let person = new Object();

// person.name="Bijit Das"

// console.log(person);

// ########## ACCESSORS ( GETTERS AND SETTERS)###############

//  GETTER
// let person = {
//     name :'Bijit',
//     age : 25,
//     get getName(){
//         return this.name.toUpperCase()
//     }
// }
// console.log(person.getName);

// SETTER

// let person = {
//     name :'Bijit',
//     age : 25,
//     set setName(n){
//          this.name = n.toUpperCase()
//     }
// }

// person.setName="Priyanka"
// console.log(person);

// ######### OBJECT CONSTRUCTOR ############

// function Student (name,age,cls) {
//     this.fullName=name
//     this.age=age
//     this.cls=cls
// }

// var student1= new Student ("Bijit Das",25,12)
// student1.nationality="Indian" // Add Elements
// console.log(student1);

// student1.name = function(){  // Method
//     return this.fullName
// }
// console.log(student1.fullName);

// ########### PROTOTYPES #############

// function Student (name,age,cls) {
//         this.fullName=name
//         this.age=age
//         this.cls=cls
//     }

// Student.prototype.nationality = "Indian"

// var student1= new Student ("Bijit Das",25,12)
// console.log(student1);
// console.log(student1.nationality);


// ################# NESTED OBJECTS ########################


// let user = {
//     id : 101,
//     email : "123@gmail.com",
//     personalInfo : {
//         name : "Bijit",
//         address : "Bengaluru, Karnakata",
//         contact : {
//             ph : 9101457724,
//             houseNo : 123,
//             street : "3rd cross road"
//         }
//     }
// }
// console.log(user.personalInfo.contact.street);

// ############## HOISTING ##################

// JS takes all declaration and keeps it on top 
// so it doesnt matter where a function is written 
// unless its properly declared

// hello()

// function hello(){
//     console.log("Hello");
// }

// NORMAL PROCEDURE 

// let x; //declaration

// x= 7 // assignment

// console.log(x); //call
// // ###########################################
// // Not so NORMAL (UNDEFINED)

// var x1

// console.log(x1); // undefined

// x1=7;
// // #########################################
// // Hoisting
// // var x3
// // console.log(x3); //undefined
// // x3=9

// x3=9
// console.log(x3); //defined
// var x3

// ############# STRICT MODE ##############

// "use strict"

// x=4
// console.log(x); // when "strict mode"is used 
//                 // variable without declaration will not be
//                 // printed


// ########### DOM ###############
// Document Object Model

// DOM is an application programming inteface (API)
// for maniplating HTML and XML documents(add,remove and modify parts of the document/HTML)



// ######### SELECT ELEMENT BY ID #############

// let elm=document.getElementById("second");
// console.log(elm.innerHTML); // get value of the html tag
// elm.innerHTML= "Hello"
// console.log(elm.innerHTML);

// ######### SELECT ELEMENT BY CLASS #############

// let elm2=document.getElementsByClassName("ul2")
// // console.log(elm2);
// // elm2[0].innerHTML="Bijit" // select single elements

// for(let i=0; i<elm2.length;i++){
//     elm2[i].innerHTML="Das" // texts in html are now changed
// }

//############# QUERY SELECTOR ###################

// let elm3=document.querySelector("li.ul2")
// elm3.innerHTML="PIKA" //selects only one element that
//                       //that satisfied the requiredment.


// let elm3=document.querySelectorAll("li.ul2")

// for(let i=0; i<elm3.length;i++){
//         elm3[i].innerHTML="PIKA" // selects all.
//     }


// ############# TRAVERSE ELEMENTS IN JS #####################

// let eml3=document.getElementById("second")
// let prt = eml3.parentElement //select parennt element
// prt.innerHTML="<h1>Hey</h1>"
// console.log(prt);

// let eml3=document.getElementById("parent1")
// let node = eml3.firstElementChild //select child element
// node.innerHTML="<h1>Hey</h1>"
// console.log(node);

// let eml3=document.getElementById("parent1")
// let node = eml3.children; //select all child element
// node[0].innerHTML="<h2>hi</h2>" //need loop to select all elements
// console.log(node);

// ############ MANIPULATE HTML (CHANGE THE HTML) ##################
// let elm=document.getElementById("parent1")
// let content =elm.innerHTML //Fetch
// console.log(content);

// let elm=document.getElementById("parent1")
// elm.innerHTML="<h1>Heading </h1>"

// ########### APPEND ####################

// let elm=document.getElementById("parent2")
// let h1=document.createElement('h1');
// let text=document.createTextNode("This is h1 tag")
// h1.appendChild(text)
// elm.appendChild(h1)

// ########## CHANGE INLINE STYLE ###############
// let btn=document.getElementById("btn")
// btn.style.cssText="color:orange;background-color:black;" //more priority than css file ..replaces all css styling

// btn.setAttribute('style','color:orange')
// btn.style.color="orange" 

// ######## DOM EVENTS (EVENT LISTENER) #############

// function btnclick(){
//     alert("Clicked")
// }

// let btn=document.getElementById("btn")

// btn.addEventListener('click',btnclick)
// btn.addEventListener('mouseover',function(){
//     alert("mouse over")
// })

// ############## PAGE LOAD EVENTS #############

// window.addEventListener('DOMContentLoaded',function(){
//     console.log("DOM LOADED")
// })

// window.addEventListener('load',function(){
//     console.log("Fully loaded")
// })

// ####### EVENT BUBBLING AND CAPTURING #####################

// let d=document.getElementById("div1")
// let b=document.getElementById("btn")

// b.addEventListener('click',function(){
//     console.log("btnclicked"),true;
// })
// d.addEventListener('click',function(){
//     console.log("div1clicked"),true;
// })
// document.body.addEventListener('click',function(){
//     console.log("bodyclicked"),true;
// })

// ########### FORM VALIDATION ##############
// let username=document.getElementById("user")
// let password=document.getElementById("pass")

// let flag=1;

// function validateForm(){
//     if(username.value ==""){
//         document.getElementById("usererror").innerHTML="Username Empty"
//         flag=0
//     }
//     else if(username.value.length< 3){
//         document.getElementById("usererror").innerHTML="Min 3"
//         flag=0
//     }
//     else{
//         document.getElementById("usererror").innerHTML=""
//         flag=1
//     }
//     if(password.value ==""){
//         document.getElementById("passerror").innerHTML="Password Empty"
//         flag=0
//     }
//     else if(password.value.length< 3){
//         document.getElementById("passerror").innerHTML="Min 3"
//         flag=0
//     }
//     else{
//         document.getElementById("passerror").innerHTML=""
//         flag=1
//     }
//     if(flag){
//         return true
//     }
//     else{
//         return false;
//     }
// }
// ################## PASSWORD MATCHER #############
let a=document.getElementById("pass1")
let b=document.getElementById("pass2")

function validatePass(){
   

    if(a.value==""){
        document.getElementById("spn").innerHTML=("Blank")
        return false;
    }
    if(a.value.length<3){
        document.getElementById("spn").innerHTML=("Too Short")
        return false;
    }
    if(a.value.length>8){
        document.getElementById("spn").innerHTML=("Too Big")
        return false;
    }
    if(a.value==b.value){
        
        document.getElementById("spn").innerHTML=("MATCH")
     
        return true;
    }
    else{
        document.getElementById("spn").innerHTML=("NO MATCH")
        return false;
    }

}
// ############ PASSWORD VIEWER ##################

// let eye=document.getElementById("btn")
// let password=document.getElementById("pass")

// function func(){
//     if(password.type=='password'){
//         password.type= 'text'
//         eye.innerHTML='Hide'
//     }
//     else{
//         password.type ='password'
//         eye.innerHTML='Show'
//     }
// }

// ########### ADVANCED JS ##############

// REST PARAMETER

// function sum(...args){
//     let res=0
//     for(let i=0;i<args.length;i++){
//         res+=args[i]
//     }
//     console.log(res);
// }

// sum(2,3,4,5,6)

// ########### For of ################

// let score=[4,5,6,7,2]
// let score='Bijit'

// for (let x of score){
//     console.log(x);
// }

// ########### ARROW FUNCTION #########

// function sum(a,b){
//     return a+b;
// }
// //  ARROW
// let sumA=(a,b)=>{
//     return a+b;
// }

// let double=a=>2*a
// console.log(double(4));

// console.log(sum(2,3));
// console.log(sumA(2,3));

// ############## CALL BACK FUNCTION ##################

// function add(num1,num2,sayHello){
//     console.log(num1+num2);
//     sayHello();
    
// }

// function hello(){
//     console.log("Hello");
// }
// function hi(){
//     console.log("Hi");
// }

// add(12,23,hello)
// add(12,23,hi)
// add(12,23,function(){
//     console.log("oye");
// })

// ################### MAP #################

// let arr =[2,3,4,5,6,7]

// // // let arr1 =[]

// // // for(let i=0;i<arr.length;i++){
// // //     arr1[i]=arr[i]*2
// // // }

// // // console.log(arr1);

// // //  With MAP

// // let arr2=arr.map(function(val){
    
// //         return val*10
    
// // });

// let arr3=arr.map((val)=>val*4)

// // console.log(arr2);
// console.log(arr3);


// ############## FILTER ##################

// let arr = [2,22,13,5,6,7,9,24]

// let arr1=arr.filter(val=>val>10)
// console.log(arr1);


// let team =[{
//     name : "Bijit",
//     position : "Apprentice"
//     },
//     {
//     name:"pika",
//     position:"Apprentice"
//     },
//     {
//     name:"sourav",
//     position: "Developer"
//     }
// ]

// let fil=team.filter(val=> val.position=="Apprentice")
// console.log(fil);

// ########### REDUCE ###################

// let arr=[1,2,3,4,5,6]
// let arr3=arr.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(arr3);


//################## HIGHER ORDER FUNCTION ######################

// function a(){
//     alert("Hello")
// }

//  setTimeout(a,4000)

// // #######

// let sal =[23,45,35,87]

// let res=sal.map(n=>n>30)
// console.log(res);



