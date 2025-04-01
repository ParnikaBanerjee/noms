function searchRecipes(){
    let searchInput=document.getElementById("searchInput").value;
    fetch('www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast').then(response => response.json()).then(data=>
    {
        let html="";
        if(data.meals){
            data.meals.array.forEach( meal => { 
            
            html+=`<div class="meal-item" data-id=${meal.idMeal} style="width: 18rem;">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>`
            
        });
        }else{
            html="No results found";
        }
        document.getElementById("searchResults").innerHTML=html;
    }
    )

}