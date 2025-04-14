const defaultEntries = [
  {
      id: Date.now(),
    videoGameName: "Celeste",
    entryTitle: "",
    date: "April 19th, 2025",
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
    tags: "Played"
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
    tags: "Played"
  }];

// Grabbing DOM elements 
const entriesContainer = document.querySelector('#allEntries');
const entryFilter = document.querySelector("#journalFilter")

// If localStorage has a 'entry.list' item, it uses that,
// otherwise it uses defaultEntries (should be established from other js file...).
let entryList = localStorage.getItem('entry.list') ? JSON.parse(localStorage.getItem('entry.list')) : defaultEntries;

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