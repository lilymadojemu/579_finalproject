// Add year to the footer
document.querySelector("#year").innerHTML = new Date().getFullYear();

// Wishlist Enablement
const searchForm = document.querySelector("#search");
const searchInput = document.querySelector("#gameSearch");
const foundGames = document.querySelector("#foundGames");

let wishList = localStorage.getItem("wish.list") ? JSON.parse(localStorage.getItem("wish.list")) : [];

searchForm.addEventListener("submit", e => {
    e.preventDefault(); // Stops the form from refreshing the page
    const searchQuery = searchInput.value.trim(); // Get user input
    if (searchQuery) {
      fetchGames(searchQuery); // Pass the search term to the fetch function
    }
  });

const fetchGames = (query) => {
    fetch(`https://api.rawg.io/api/games?key=6b0a81daa54e4f359c511cc27e0d57ad&search=${query}&page_size=10`)
    .then(res => res.json())
    .then(data => {
      console.log(data.results); // Just for debugging
      renderSearchResults(data.results); // Show the games on the page
    })
    .catch(err => {
      console.error('Error fetching games:', err);
    });
};

const renderSearchResults = (results) => {
    foundGames.innerHTML = ""; // Clear any previous results
    foundGames.classList.remove("hidden"); // Make sure the results section is visible
  
    results.forEach(game => {
      const gameDiv = document.createElement("div");
      gameDiv.classList.add("search-result");
  
      gameDiv.innerHTML = `
        <img src="${game.background_image}" alt="${game.name}" class="game-img"/>
        <p>${game.name}</p>
        <button class="add-to-wishlist" 
          data-id="${game.id}" 
          data-name="${game.name}" 
          data-img="${game.background_image}">
          Add to Wishlist
        </button>
      `;
  
      foundGames.appendChild(gameDiv);
    });
  };

const renderWishlist = () => {
    
}