const planets = [
    {planetName:"Sun",gravity:27.9},
    {planetName:"Moon",gravity:0.1655},
    {planetName:"Mercury",gravity:0.377},
    {planetName:"Venus",gravity:0.9032},
    {planetName:"Earth",gravity:1},
    {planetName:"Mars",gravity:0.3895},
    {planetName:"Jupiter",gravity:2.605},
    {planetName:"Saturn",gravity:1.139},
    {planetName:"Uranus",gravity:0.917},
    {planetName:"Neptune",gravity:1.148},
]
const select=document.getElementById("selectPlanet")

planets.map((ele)=>{
    const options=document.createElement("option")
    options.innerHTML=ele.planetName
    options.value=ele.gravity

    
    select.appendChild(options)
    
});

function calc(){
    const weight=+document.getElementById("weight").value
    console.log(weight);

    const select=document.getElementById("selectPlanet")
    var selectedIndex=select.selectedIndex
    const selectedOption=select.options[selectedIndex]
    const gravity = +selectedOption.value
    console.log(gravity);

    const result=weight*gravity
    console.log(result);

}



