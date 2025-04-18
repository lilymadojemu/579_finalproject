
const defaultEntries = [
    {
        id: Date.now(),
      videoGameName:"Celeste",
      entryTitle:"",
      date:"April 19th, 2025",
      overallThoughtsImg:"",
      overallThoughtsImgCaption:"",
      overallThoughtsParagraph:"",
      keyMomentImg:"",
      keyMomentImgCaption:"",
      keyMomentHeading:"",
      keyMomentParagraph:"",
      conclusionImg:"",
      conclusionImgCaption:"",
      conclusionHeading:"",
      conclusionParagraph:"",
      tags:"Played"
    },
    {
        id: Date.now() + 1,
      videoGameName: "Persona 3 Reload",
      entryTitle: "",
      date: "February 2nd, 2024",
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
      tags:"Played"
    }];

// If localStorage has a 'entry.list' item, it uses that,
// otherwise it uses defaultEntries.
let entryList = localStorage.getItem('entry.list') ? JSON.parse(localStorage.getItem('entry.list')) : defaultEntries;
// Save default entries to localStorage if entry.list doesn't already exist
if (!localStorage.getItem("entry.list")) {
    localStorage.setItem("entry.list", JSON.stringify(defaultEntries));
}
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


// show the screen confirming entry has been saved
const entryConfirmed = () => {
    console.log('confirmed!');
    // show the screen confirming entry has been saved

    // Hide form area
    journalEntryForm.classList.add("hidden");

    // Reveal confirm screen
    confirmScreen.classList.remove("hidden");
    // Getting the information of the entry the user just submitted
    const entryList = JSON.parse(localStorage.getItem('entry.list'));
    const lastEntry = entryList[entryList.length - 1];

    // have 3 buttons: go to entry page of the entry just created, go to the journal overview page, or go back to the form and create a new entry
    confirmScreen.innerHTML = 
    ` 
        <h2>Journal Entry Complete!</h2> 

        <a href='entry.html?id=${lastEntry.id}'><button>View Your Current Journal Entry</button></a> 

        <a href='entriesOverview.html'><button>View All Journal Entries</button></a> 

        <a onClick=location.reload()><button>Create another journal entry</button></a>
    `
}

//From ChatGPT
function checkImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
};

// Journal Entry Form 
// Capture form data and save it as an object to local storage
async function captureEntry() {
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
    const overallImgIsValid = await checkImage(overallImgInput.value);
    if (!overallImgIsValid && overallImgInput.value) {
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
    const keyImgIsValid = await checkImage(keyImgInput.value);
    if (!keyImgIsValid && keyImgInput.value)  {
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
    const conclusionImgIsValid = await checkImage(conclusionImgInput.value);
    if (!conclusionImgIsValid && conclusionImgInput.value)  {
        conclusionImgInput.classList.add("is-invalid");

    } else {
        conclusionImgInput.classList.remove("is-invalid");
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
    (overallImgInput.value ? overallImgIsValid : true) &&
    (keyImgInput.value ? keyImgIsValid : true) &&
    (conclusionImgInput.value ? conclusionImgIsValid : true) &&
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

// Render and Filter ALl Journal Entires
// Grabbing DOM elements 
const entriesContainer = document.querySelector('#allEntries');
const entryFilter = document.querySelector("#journalFilter")

// Preparing for filtering entries based on tag(s)
let filterStatus = false;
let filteredEntries = [];

// Render preview of journal entries based on information from entryList
const renderEntries = (entries) => {
  if (!filterStatus) {
    entries = entryList
  } else {
    entries = filteredEntries
  }
    entriesContainer.innerHTML="";
    // Create all entry previews from entryList
    entries.forEach((entry) => {
      entriesContainer.innerHTML += 
        `<div class="position-relative col-12 border border-secondary rounded my-3 p-3 bg-white">
         <div class="d-flex">
          <h3>${entry.videoGameName}</h3>
          <h4>${entry.entryTitle}</h4>
          <small class="px-1 text-muted align-self-center">${entry.date}</small>
         </div>
       <p>${entry.entryTitle}</p>
       <p> ${entry.tags} </p>
      <a href='entry.html?id=${entry.id}'><button>View Journal Entry</button></a> 
       </div>`;
      });
}

renderEntries();


// Filtering based on tags
const tagList = ["Played", "Did Not Finish", "Playing", "Watched", "Not Played"]

const renderTagFilters = () => {
  entryFilter.innerHTML = "";
  tagList.forEach(tag => {
    entryFilter.innerHTML += 
    `<button class="tag-btn" value="${tag}">${tag}</button>`;
  });
  entryFilter.innerHTML += `<button class="showAll">Show All Entries</button>`;

  // Add event listeners after buttons are added to the DOM
  document.querySelectorAll(".tag-btn").forEach(button => {
    button.addEventListener("click", e => {
      filterStatus = true;
      const selectedTags = e.target.value;
      filteredEntries = entryList.filter(
        (entry) => entry.tags && entry.tags === selectedTags
      );
      console.log("Checking entry:", filteredEntries);
      renderEntries(filteredEntries);
    });
  document.querySelector(".showAll").addEventListener("click", e => {
    filterStatus = false;
    filteredEntries = [];
    renderEntries();
  });

  });
}

renderTagFilters();