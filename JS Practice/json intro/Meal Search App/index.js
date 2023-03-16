// const search=document.getElementById('search')
// const submit=document.getElementById('submit')
// const random=document.getElementById('random')
// const mealEl=document.getElementById('meals')
// const resultHeading=document.getElementById('resultHeading')
// const singleMeal=document.getElementById('singleMeal')

// // console.log(search); 
// // console.log(submit); 
// // console.log(random); 
// // console.log(mealEl); 
// // console.log(singleMeal); 

// submit.addEventListener('submit',searchMeal);

// async function searchMeal(e){
//     e.preventDefault();

//     singleMeal.innerHTML=""
//     const term=search.value
//     if(term==""){
//         alert("Type Something")
//     }
//     else{
//         let res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
//         let data= await res.json();
//         console.log(data);
//         resultHeading.innerHTML=`<h2>Search result for ${term}</h2>`
//         if(data.meals===null){
//             alert(`Nothing found for ${term}`)
//         }
//         else{
//             mealEl.innerHTML=data.meals.map(
//                 (meal)=>`
//                 <div class="meal">
//                 <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
//                 <div class="mealInfo" data-mealID="${meal.idMeal}">
//                 <h3>${meal.strMeal}</h3>
//                 </div>
//                 </div>
//                 `
//             ).join("")
//         }
//         console.log(mealEl);
//     }

// }





