// Add year to the footer
document.querySelector("#year").innerHTML = new Date().getFullYear();

// DOM Element Selectors
// The Entire Journal Entry Form 
const journalEntryForm = document.querySelector(".journalEntryForm")
// Overall Thoughts Inputs
const entryNameInput = document.querySelector("#journalEntryName");
const videoGameTitleInput = document.querySelector("#videoGameTitleForm");
const overallImgInput = document.querySelector("#thoughtImgId");
const overallImgCaptionInput = document.querySelector("thoughtImgCaptionId");
const overallParagraphInput = document.querySelector("#overallThoughtsParagraphId");
// Key Moments Inputs
const keyImgInput = document.querySelector("#keyImgId");
const keyImgCaptionInput = document.querySelector("#keyImgCaptionId");
const keyParagraphInput = document.querySelector("#keyParagraphId");
// Conclusion  Inputs
const conclusionImgInput = document.querySelector("#conclusionImgId");
const conclusionImgCaptionInput = document.querySelector("conclusionImgCaptionId");
const conclusionParagraphInput = document.querySelector("#conclusionParagraphId");
// Tags
const selectedTags = document.querySelector("#entryTags");
// Form Submit Button
const formSubmitBtn = document.querySelector("#formSubmit")


// Journal Entry Form 
// Enabling interactivity of journal entry form

const entryConfirmed = () => {
    console.log('confirmed!');
    // show the screen confirming entry has been saved, have 3 buttons: go to entry page of the entry just created, go to the journal overview page, or go back to the form and create a new entry

    // hide form area
    formSubmitBtn.classList.add('hidden');
}
// Capture form data and save it as an object to local storage
// https://stackoverflow.com/questions/17087636/how-to-save-data-from-a-form-with-html5-local-storage

function captureEntry() {
    console.log('Entry Captured!')
    // determine if entry is valid or not
    // if (!titleInput.value ||titleInput.value.includes(' ')) {
    //     titleInput.classList.add('is-invalid');
    //   }else {
    //     titleInput.classList.remove('is-invalid');
    //   };
    //   if (!dateInput.value || memoryList.some(memory => memory.date === localizedDate)){
    //     dateInput.classList.add('is-invalid');
    //   } else{ 
    //     dateInput.classList.remove('is-invalid');
    //   };
    //   if (!descriptionInput.value){
    //     descriptionInput.classList.add('is-invalid');
    //   } else{
    //     descriptionInput.classList.remove('is-invalid');
    // };
    // If entry infomration is valid, create a new entry object, push it to entryList, and save it to localstorage
    // if (titleInput.value && !titleInput.value.includes(' ') && dateInput.value && !memoryList.some(memory => memory.date === localizedDate) && descriptionInput.value) {
    //     // Create a new entry if validation passes, this is what will be aved to localstorage
    //     const newEntry = {
    //       title: titleInput.value,
    //       date: localizedDate,
    //       description: descriptionInput.value
    //     };
    //     // Add the new entry to the entryList
    //     entryList.push(newEntry);
    
    //     // Save the updated entryList to localStorage
    //     localStorage.setItem('entry.list', JSON.stringify(entryList));
    
    //     // Clear all inputs (only after everything is valid)
    //     titleInput.value = '';
    //     dateInput.value = '';
    //     descriptionInput.value = '';

    entryConfirmed();
}
// In order for captureEntry to happen, add event listener to submit button to capture the appropriate data
document.querySelector('#formSubmit').addEventListener('click', captureEntry);



// Wishlist Enablement

// fetch https://api.rawg.io/api/games?key=6b0a81daa54e4f359c511cc27e0d57ad
fetch('https://api.rawg.io/api/games?key=6b0a81daa54e4f359c511cc27e0d57ad')
  .then(res => res.json())
  .then((data) => {
    // not good for like every game but it's a start
    console.log(data.results)
    const found = data.results.find(game => game.name === 'Limbo');
    if (found) {
      console.log('yes', found);
    } else {
      console.log('not found');
    }
    });

// Search Code // <-- Around what I want UPDATE FOR VIDEO GAME JOURNAl:
function searchGames(id) {
    // It's working! Now, need to figure out how it will grad search input and identify names...
    fetch('https://rawg.io/api/games/' + id + '?key=6b0a81daa54e4f359c511cc27e0d57ad')
    .then(response => response.json())
    .then((data) => {console.log(data.description)})
    .catch(error => console.error('Error:', error));

    // want to see if data.gamename (or something like that) == user input
        // refer to the github regarding how searching a game up works
        // if the game name does match, 
}
  
// function searchGames(id) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://rawg.io/api/games/' + id + '?key=6b0a81daa54e4f359c511cc27e0d57ad');
//     xhr.responseType = 'json';
//     xhr.addEventListener('load', () => {
//       currentGame = xhr.response;
//     //   updateGameInfo(currentGame);
//     //   $loadingView.classList.add('hidden');
//     //   $gameInfoView.classList.remove('hidden');
//     });
//     xhr.send();
//   }

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

// From github,  would be creating how the game looks on the wishlist
function createGameData() {
    const game = {};
    game.id = currentGame.id;
    game.name = currentGame.name;
    game.background_image = currentGame.background_image;
    // tags
}