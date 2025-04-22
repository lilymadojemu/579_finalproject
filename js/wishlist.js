// DOM Elements from wishlist.html
const searchForm = document.querySelector("#search");
const searchInput = document.querySelector("#gameSearch");
const foundGames = document.querySelector("#foundGames");
const wishlistContainer = document.querySelector(".wishlistContainer")

// Getting wishlist from local storage if it exists, else empty list
let wishList = localStorage.getItem("wish.list") ? JSON.parse(localStorage.getItem("wish.list")) : [];

// Gets the search query/input for the game 
searchForm.addEventListener("submit", e => {
    // Stops the form from refreshing the page
    e.preventDefault(); 
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
      // Pass the search query to the fetch function
      fetchGames(searchQuery);
    }
  });

/**
 * Gets info from RAWG API based on what users is searching for
 * @param {string} query Search query
 */
const fetchGames = (query) => {
    fetch(`https://api.rawg.io/api/games?key=6b0a81daa54e4f359c511cc27e0d57ad&search=${query}&page_size=10`)
    .then(res => res.json())
    .then(data => {
      console.log(typeof(data.results))
      renderSearchResults(data.results); // Show the games on the page
    })
    .catch(err => {
      console.error('Error fetching games:', err);
    });
};

/**
 * Displays search results from fetchGames(query)
 * @param {number} results The data of games from fetchGames(query)
 */
const renderSearchResults = (results) => {
    foundGames.innerHTML = ""; // Clear any previous results
    foundGames.classList.remove("hidden"); // Make sure the results section is visible
    results.forEach((game) => {
      foundGames.innerHTML += `
        <img class="gameImg" src="${game.background_image}" alt="${game.name}"/>

        <p>${game.name}</p>

        <button class="wishlistBtn" data-id="${game.id}" data-name="${game.name}" data-release="${game.release}" data-rating="${game.rating}"data-img="${game.background_image}"> 
        Add to Wishlist 
        </button>
      `
      document.querySelectorAll(".wishlistBtn").forEach(button =>{
        button.addEventListener("click", e => {
            // Add game to wishList in local storage
            wishList.push(e.target.dataset)
            // Save the updated entryList to localStorage
            localStorage.setItem("wish.list", JSON.stringify(wishList));
            // Hide view of the search results area
            foundGames.classList.add("hidden"); 
            // Render Wishlist area
            renderWishlist(wishList);
        })
      })
    });
  };

/**
 * Displays the selected games in the "my wishlist" area
 */
const renderWishlist = (wishList) => {
      wishlistContainer.innerHTML = ""
      wishList.forEach((game) => {
        wishlistContainer.innerHTML += `
        <img class="gameImg" src="${game.img}" alt="${game.name}"/>
        <p>${game.name}<p>`
      });
      // Adjusting the size of the images
      document.querySelectorAll(".gameImg").forEach((img) => {
        img.style.width = "500px"
      });
};

renderWishlist(wishList);