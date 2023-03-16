const div=document.getElementById("div")
const btn=document.getElementById("btn")
const btn2=document.getElementById("btn2")
const mainBody=document.getElementsByTagName("body")
const red=document.getElementById("red")
const yellow=document.getElementById("yellow")
const black=document.getElementById("black")
let color=['red','yellow','black','green','purple']
btn.addEventListener('click',func)

function func(){
    let randomColor=color[Math.floor(Math.random()*color.length)]
    div.style.background=randomColor
}

btn2.addEventListener('click',change)

function change(){
   let randomColor=color[Math.floor(Math.random()*color.length)]
   console.log(randomColor);
   document.body.style.background=randomColor
}

red.addEventListener('click',redClr)

function redClr(){
    document.body.style.background=color[0];
}
yellow.addEventListener('click',yellowClr)

function yellowClr(){
    document.body.style.background=color[1];
}
black.addEventListener('click',blackClr)

function blackClr(){
    document.body.style.background=color[2];
}


//Async JS
//Callbacks, Promises, Async & Await


let p=new Promise((resolve,reject)=>{
    let a=1+1
    if(a==2){
        resolve("Success")
    }
    else{
        reject("Failed")
    }
})

p.then((message)=>{
    console.log("This is in the Then "+ message);
}).catch((message)=>{
    console.log("This is in the Catch"+message);
})
   
// MAP

let arr=[2,3,4,5,6];

let arr2=arr.filter(function(a){
   return a%2==0
})

console.log(arr2);

let arr3=arr.reduce(function(a1,b1){
    return a1+b1
    
})

console.log(arr3);


function greet(){
    console.log("Hello");
}

setTimeout(greet,5000)


let a=9
console.log(a);