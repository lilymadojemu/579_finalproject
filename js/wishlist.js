// Add year to the footer
document.querySelector("#year").innerHTML = new Date().getFullYear();

// Wishlist Enablement
const searchForm = document.querySelector("#search");
const searchInput = document.querySelector("#gameSearch");
const foundGames = document.querySelector("#foundGames");
const wishlistContainer = document.querySelector(".wishlistContainer")

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
      renderSearchResults(data.results); // Show the games on the page
    })
    .catch(err => {
      console.error('Error fetching games:', err);
    });
};

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


const renderWishlist = (wishList) => {
      // Display the chosen game in the wishlist area
      wishList.forEach((game) => {
        wishlistContainer.innerHTML += `
        <img class="gameImg" src="${game.img}" alt="${game.name}"/>
        <p>${game.name}<p>
        <button class="deleteBtn">Delete</button>
        `
      })

};

renderWishlist(wishList);