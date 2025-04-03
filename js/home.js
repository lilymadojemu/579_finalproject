

// Enabling interactivity of journal entry form

// Capture form data and save it as an object to local storage
// https://stackoverflow.com/questions/17087636/how-to-save-data-from-a-form-with-html5-local-storage

const captureEntry= () => {
    // Don't forget entry.list (localstorage) will be establish in this function!
    console.log('Entry Captured!')
}

// In order for captureEntry to happen, add event listener to submit button to capture the appropriate data
document.querySelector('#formSubmit').addEventListener('click', captureEntry);

// fetch https://api.rawg.io/api/games?key=6b0a81daa54e4f359c511cc27e0d57ad
fetch('https://rawg.io/api/games?token&key=6b0a81daa54e4f359c511cc27e0d57ad')
  .then(res => res.json())
  .then((data) => console.log(data))
  .catch(error => console.error('Error:', error));

// Wishlist Enablement

// Search Code // <-- Around what I want UPDATE FOR VIDEO GAME JOURNAl:
function searchGames() {
    // It's working! need tofigure out how it will grad search input and identify names...
    fetch('https://rawg.io/api/games?token&key=6b0a81daa54e4f359c511cc27e0d57ad')
    .then(res => res.json())
    .then((data) => console.log(data))
    .catch(error => console.error('Error:', error));
}
  
// Create a container under already wishlisted games to house games appearing from search, a type of what I am doing for overviews page
function buildSearchResults(results) {
const $searchResults = document.querySelector('#search-results');
if ($searchResults) {
    $searchResults.remove();
}

const $resultRow = document.createElement('div');
$resultRow.setAttribute('class', 'row search');
$resultRow.setAttribute('id', 'search-results');

for (let i = 0; i < results.length; i++) {
    const $game = document.createElement('div');
    $game.setAttribute('class', 'col-1-3 flex-group-vert');
    $game.setAttribute('data-item', 'game');
    $game.setAttribute('data-id', results[i].id);

    const $gameLink = document.createElement('a');

    const $imgWrap = document.createElement('div');
    $imgWrap.setAttribute('class', 'cover-img-wrap search');

    const $coverImg = document.createElement('img');
    $coverImg.setAttribute('class', 'cover-img');
    $coverImg.setAttribute('src', results[i].background_image);
    $coverImg.setAttribute('alt', results[i].name);

    const $title = document.createElement('h2');
    $title.textContent = results[i].name;

    $game.appendChild($gameLink);
    $gameLink.appendChild($imgWrap);
    $gameLink.appendChild($title);
    $imgWrap.appendChild($coverImg);
    $resultRow.appendChild($game);
}

return $resultRow;
}
  