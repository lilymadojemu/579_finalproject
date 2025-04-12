
const defaultEntries = [
    {
        id: Date.now(),
      videoGameName: "Celeste",
      entryTitle: "",
      overallThoughtsImg:"",
      overallThoughtsImgCaption:"",
      overallThoughtsHeading:"",
      overallThoughtsParagraph:"",
      keyMomentImg:"",
      keyMomentImgCaption:"",
      keyMomentHeading:"",
      keyMomentParagraph:"",
      conclusionImg:"",
      conclusionImgCaption:"",
      conclusionHeading:"",
      conclusionParagraph:"",
      tags: "Played"
    },
    {
        id: Date.now(),
      videoGameName: "Persona 3 Reload",
      entryTitle: "",
      overallThoughtsImg:"",
      overallThoughtsImgCaption:"",
      overallThoughtsHeading:"",
      overallThoughtsParagraph:"",
      keyMomentImg:"",
      keyMomentImgCaption:"",
      keyMomentHeading:"",
      keyMomentParagraph:"",
      conclusionImg:"",
      conclusionImgCaption:"",
      conclusionHeading:"",
      conclusionParagraph:"",
      tags: "Played"
    }];


// Add year to the footer
document.querySelector("#year").innerHTML = new Date().getFullYear();

// DOM Element Selectors
// The Entire Journal Entry Form 
const journalEntryForm = document.querySelector("#journalEntryForm")
// Introduction
const entryNameInput = document.querySelector("#journalEntryName");
const videoGameTitleInput = document.querySelector("#videoGameTitleForm");
const dateEntryInput = document.querySelector("#dateEntryId")
// Overall Thoughts Inputs
const overallImgInput = document.querySelector("#thoughtImgId");
const overallImgCaptionInput = document.querySelector("#thoughtImgCaptionId");
const overallParagraphInput = document.querySelector("#overallThoughtsParagraphId");
// Key Moments Inputs
const keyImgInput = document.querySelector("#keyImgId");
const keyImgCaptionInput = document.querySelector("#keyImgCaptionId");
const keyParagraphInput = document.querySelector("#keyParagraphId");
// Conclusion  Inputs
const conclusionImgInput = document.querySelector("#conclusionImgId");
const conclusionImgCaptionInput = document.querySelector("#conclusionImgCaptionId");
const conclusionParagraphInput = document.querySelector("#conclusionParagraphId");
// Tags
const selectedTags = document.querySelector("#entryTags");
// Form Submit Button
const formSubmitBtn = document.querySelector("#formSubmit")
// Confirm Screen Area
const confirmScreen = document.querySelector("#entryConfirmScreen")

// If localStorage has a 'memory.list' item, it uses that,
// otherwise it uses defaultEntries.
let entryList = localStorage.getItem('entry.list') ? JSON.parse(localStorage.getItem('entry.list')) : defaultEntries;


// Journal Entry Form 
// Enabling interactivity of journal entry form
const entryConfirmed = () => {
    console.log('confirmed!');
    // show the screen confirming entry has been saved

    // Hide form area
    journalEntryForm.classList.add("hidden");

    // Reveal confirm screen
    confirmScreen.classList.remove("hidden");


    // have 3 buttons: go to entry page of the entry just created, go to the journal overview page, or go back to the form and create a new entry
    confirmScreen.innerHTML = 
    ` 
        <h2>Journal Entry Complete!</h2> 

        <a><button>View Your Current Journal Entry</button></a> 

        <a href='entriesOverview.html'><button>View All Journal Entries</button></a> 

        <a onClick=location.reload()><button>Create another journal entry</button></a>
    `
}

// // Capture form data and save it as an object to local storage
// // https://stackoverflow.com/questions/17087636/how-to-save-data-from-a-form-with-html5-local-storage
// function checkImage(url) {
//     var request = new XMLHttpRequest();
//     request.open("GET", url, true);
//     request.send();
//     request.onload = function() {
//       status = request.status;
//       if (request.status == 200) //if(statusText == OK)
//       {
//         console.log("image exists");
//       } else {
//         console.log("image doesn't exist");
//       }
//     }
//   };


function captureEntry() {
    console.log('Starting Journal Entry Capture')

    // determine if journal entry is valid or not, img stuff not required, everything else is
    // Validation CSS Bootstrap: https://getbootstrap.com/docs/5.0/forms/validation/

    // Intro Validation
    if (!entryNameInput.value) {
        entryNameInput.classList.add("is-invalid");

    } else {
        entryNameInput.classList.remove("is-invalid");
    };
    // See if localized value is needed
    if (!dateEntryInput.value){
        dateEntryInput.classList.add('is-invalid');
      } else{ 
        dateEntryInput.classList.remove('is-invalid');

      };

    if (!videoGameTitleInput.value){
        videoGameTitleInput.classList.add("is-invalid");

    } else{ 
        videoGameTitleInput.classList.remove("is-invalid");

    };
    // Overall Thoughts Validation
    // If image address is valid or not....might be a better way to determine
    if (overallImgInput.value.includes(" ")) {
        overallImgInput.classList.add("is-invalid");
    } else {
        overallImgInput.classList.remove("is-invalid");
    }

    if (!overallParagraphInput.value){
        overallParagraphInput.classList.add("is-invalid");

    } else{
        overallParagraphInput.classList.remove("is-invalid");

    };
    // Key Moments Validation
    if (keyImgInput.value.includes(" ")) {
        keyImgInput.classList.add("is-invalid");
    } else {
        keyImgInput.classList.remove("is-invalid");
    }

    if (!keyParagraphInput.value){
        keyParagraphInput.classList.add("is-invalid");

    } else{
        keyParagraphInput.classList.remove("is-invalid");

    };
    // Conclusion Validation
    if (conclusionImgInput.value.includes(" ")) {
        overallImgInput.classList.add("is-invalid");

    } else {
        overallImgInput.classList.remove("is-invalid");
    }
    if (!conclusionParagraphInput.value){
        conclusionParagraphInput.classList.add("is-invalid");

    } else{
        conclusionParagraphInput.classList.remove("is-invalid");
    };

    // If entry information is valid, create a new entry object, push it to entryList, and save it to localstorage
    const isValid =
    entryNameInput.value &&
    videoGameTitleInput.value &&
    dateEntryInput.value &&
    overallParagraphInput.value &&
    keyParagraphInput.value &&
    conclusionParagraphInput.value &&
    selectedTags.value;

    if (isValid) {
        // Create a new entry if validation passes, this is what will be saved to localstorage
        const newEntry = {
          id: Date.now(),
          entryTitle: entryNameInput.value,
          videoGameName: videoGameTitleInput.value,
          date: dateEntryInput.value,
          overallImgAddress: overallImgInput.value,
          overallImgCaptionInput: overallImgCaptionInput.value,
          overallParagraph: overallParagraphInput.value,
          keyImgAddress: keyImgInput.value,
          keyImgCaption: keyImgCaptionInput.value,
          keyParagraph: keyParagraphInput.value,
          conclusionImgAddress: conclusionImgInput.value,
          conclusionImgCaption: conclusionImgCaptionInput.value,
          conclusionParagraph: conclusionParagraphInput.value,
          tags: selectedTags.value
        };
        console.log(newEntry)
        // Add the new entry to the entryList
        entryList.push(newEntry);
        console.log(entryList)
        
        // Save the updated entryList to localStorage
        localStorage.setItem("entry.list", JSON.stringify(entryList));
        // Clear all inputs (only after everything is valid)
        entryNameInput.value = "";
        videoGameTitleInput.value = "";
        dateEntryInput.value = "";
        overallImgInput.value = "";
        overallImgCaptionInput.value = "";
        overallParagraphInput.value = "";
        keyImgInput.value = "";
        keyImgCaptionInput.value = "";
        keyParagraphInput.value = "";
        conclusionImgInput.value = "";
        conclusionImgCaptionInput.value = "";
        conclusionParagraphInput.value = "";
        selectedTags.value = "";
        // Move on to the entry confirmation screen
        console.log("Entry saved to localStorage!");
        entryConfirmed();
        }
    };

// In order for captureEntry to happen, add event listener to submit button to capture the appropriate data
formSubmitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    captureEntry(e);
  });


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