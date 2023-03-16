// var a = [1,2,3,4,5,6,7]

// a.map((ele,inx,array)=>{
//     document.write(inx)
//     document.write(ele +"<br/>")
// })

// var arr2 = ["bijit", "pika", "sourav"]

// var newArr= arr2.map((el)=>{
//     return el.toUpperCase()
// })
// document.write(newArr)
// document.write(arr2)
// ===========================================
// var arrOfArr = [[1,2,3,4,5],["a","b","C"],[6,7,8, "d","e","f"]]

// arrOfArr[0].map((ele)=>{
//     document.write(ele)
// })

// arrOfArr.map((ele)=>{
//     // console.log(ele)
//     ele.map((element)=>{
//         console.log(element);
//     })
// })

// ======================================================

// const hello = {
//     name : "Bijit",
//     array : [1,2,3,4,5],
//     age : 25,
//     21 : 32
// }
// hello.array.map((ele)=>{
//     document.write(ele)
// })
// #################################################################
function on(){
    var temp1=document.getElementsByTagName("div")
    temp1[0].setAttribute("style","background-color:red")
}

function off(){
    var temp1=document.getElementsByTagName("div")
    temp1[0].setAttribute("style","background-color:yellow")
}

// #################################################################
let printDetails=function(state,country,mode){
    console.log(this.name+state+country+mode);
}


let details={
    name:"Bijit Das",
    age:29,
    
}
//call
printDetails.call(details,"Delhi","India"," call")

//apply
printDetails.apply(details,[" Delhi"," India"," apply"])

//bind
let newfun=printDetails.bind(details,"Delhi","India"," Bind")
newfun();

setTimeout(function(){
         console.log("hello");
     },3000)



     let a=document.getElementById("pass1")
     let b=document.getElementById("pass2")
     
     function validatePass(){
        
     
        //  if(a.value==""){
        //      document.getElementById("spn").innerHTML=("Blank")
        //      return false;
        //  }
        //  if(a.value.length<3){
        //      document.getElementById("spn").innerHTML=("Too Short")
        //      return false;
        //  }
        //  if(a.value.length>8){
        //      document.getElementById("spn").innerHTML=("Too Big")
        //      return false;
        //  }
         if(a.value==b.value){
             
             document.getElementById("spn").innerHTML=("MATCH")
          
             return true;
         }
         else{
             document.getElementById("spn").innerHTML=("NO MATCH")
             return false;
         }
     
     }

    //  ############ PASSWORD VIEWER ##################

     let eye=document.getElementById("btn")
     let password=document.getElementById("pass")
     
     function func(){
         if(password.type=='password'){
             password.type= 'text'
             eye.innerHTML='Hide'
         }
         else{
             password.type ='password'
             eye.innerHTML='Show'
         }
     }