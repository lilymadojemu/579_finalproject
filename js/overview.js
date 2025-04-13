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

// Render preview of journal entries based on information from local storage

// Grabbing DOM elements for the form, will be taking content from localstorage and displaying on page
const entriesContainer = document.querySelector('#allEntries');
const entryFilter = document.querySelector("#journalFilter")

// If localStorage has a 'entry.list' item, it uses that,
// otherwise it uses defaultEntries (should be established from other js file...).
let entryList = localStorage.getItem('entry.list') ? JSON.parse(localStorage.getItem('entry.list')) : defaultEntries;


// <section tabindex="0" id="entryContainer">
//     <!-- List of Previews of Journal Entries-->
//      <!-- 3 columns -->
//       <!-- 1 -->
//         <!-- Game image -->
//       <!-- 2 -->
//         <!-- Entry Title -->
//         <!-- Game Title -->
//         <!-- Tags (for filtering)-->
//       <!-- 3 -->
//         <!-- Button to open full journal entry-->
// </section>

// Render preview of journal entries based on information from local storage

/**
 * Takes the value of a date input and formats it in the manner required by the memory list.
 *
 * @param {string} dateString
 *   The date input value.
 * @return {string}
 *   The date formatted like "Monday, Mar 3, 20 03".
 */
const formatDateForMemory = (dateString) =>
  new Date(dateString).toLocaleDateString(undefined, { weekday:"long", year:"numeric", month:"short", day:"numeric"})

// Putting entry previews on the page based on what is in local storage
const renderEntries = () => {
    // Abstract example of what I'll need to do; will populate overviews page using innerhtml and grabbing info from each element in entryList 

    // have entries automatically sorted by date, entry was inputted maybe versus date last played?
    entriesContainer.innerHTML='';
      //  Game image
      // game title
        // entry name
        // a button to view full entry page?
    // Create the html structure of all entry previews
    entryList.forEach((entry) => {
      entriesContainer.innerHTML += 
        `<div class="position-relative col-12 border border-secondary rounded my-3 p-3 bg-white">
         <div class="d-flex">
            <h3>${entry.videoGameName}</h3>
           <h3>${entry.entryTitle}</h3>
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

