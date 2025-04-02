// Select elements
const searchBtn = document.querySelector('.search-box button');
const searchInput = document.getElementById('searchInput');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// Event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});

// Fetch meal list based on ingredient search
function getMealList() {
    let searchInputTxt = searchInput.value.trim();
    
    if (searchInputTxt === "") {
        mealList.innerHTML = "<p class='error-message'>Please enter an ingredient!</p>";
        return;
    }

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if (data.meals) {
            data.meals.forEach(meal => {
                html += `
                    <div class="meal-card" data-id="${meal.idMeal}">
                        <div class="meal-img">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        </div>
                        <div class="meal-info">
                            <h3>${meal.strMeal}</h3>
                            <button class="recipe-btn">View Recipe</button>
                        </div>
                    </div>
                `;
            });
        } else {
            html = "<p class='error-message'>No recipes found for this ingredient!</p>";
        }
        mealList.innerHTML = html;
    })
    .catch(error => {
        console.error("Error fetching meal data:", error);
        mealList.innerHTML = "<p class='error-message'>Something went wrong. Try again later.</p>";
    });
}

// Fetch and display full recipe details
function getMealRecipe(e) {
    if (e.target.classList.contains('recipe-btn')) {
        let mealItem = e.target.closest('.meal-card');
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => displayRecipeModal(data.meals[0]))
        .catch(error => console.error("Error fetching recipe details:", error));
    }
}

// Display recipe details in a modal
function displayRecipeModal(meal) {
    let html = `
        <h2 class="recipe-title">${meal.strMeal}</h2>
        <p class="recipe-category"><strong>Category:</strong> ${meal.strCategory}</p>
        <div class="recipe-instructions">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class="recipe-meal-img">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        </div>
        <div class="recipe-link">
            <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}
