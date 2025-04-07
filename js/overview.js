// Default Games (To Be changed)
// <!-- User Generated -->
// <section tabindex="0">
//     <!-- Overall Thoughts -->
//         <!-- Overall Image -->
//         <!-- Caption -->
//         <!-- Overall Thought Heading -->
//         <!-- Overall Thoughts paragraph -->
//     <!-- Key Moment(s) -->
//         <!-- Key moment(s) Image -->
//         <!-- Caption -->
//         <!-- Key Moment(s) Heading -->
//         <!-- Key Moment(s) paragraph -->
//     <!-- Conclusion -->
//         <!-- Conclusion Image -->
//         <!-- Caption -->
//         <!-- Conclusion Heading -->
//         <!-- Conclusion paragraph -->
// </section>
const defaultEntries = [
    {
      videoGameName: 'Celeste',
      entryTitle: '',
      overallThoughtsImg:'',
      overallThoughtsImgCaption:'',
      overallThoughtsHeading:'',
      overallThoughtsParagraph:'',
      keyMomentImg:'',
      keyMomentImgCaption:'',
      keyMomentHeading:'',
      keyMomentParagraph:'',
      conclusionImg:'',
      conclusionImgCaption:'',
      conclusionHeading:'',
      conclusionParagraph:''
    },
    {
      videoGameName: 'Persona 3 Reload',
      entryTitle: '',
      overallThoughtsImg:'',
      overallThoughtsImgCaption:'',
      overallThoughtsHeading:'',
      overallThoughtsParagraph:'',
      keyMomentImg:'',
      keyMomentImgCaption:'',
      keyMomentHeading:'',
      keyMomentParagraph:'',
      conclusionImg:'',
      conclusionImgCaption:'',
      conclusionHeading:'',
      conclusionParagraph:''
    }
  ];


// Grabbing DOM elements for the form, will be taking content from localstorage and displaying on page
const entryContainer = document.querySelector('#entryContainer');

// Render preview of journal entries based on information from local storage

// If localStorage has a 'memory.list' item, it uses that,
// otherwise it uses defaultEntries.
let entryList = localStorage.getItem('entry.list') ? JSON.parse(localStorage.getItem('entry.list')) : defaultEntries;

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
    entryContainer.innerHTML='';
    const sortedEntries = memoryList.sort((a, b) => a.date - b.date);
    localStorage.setItem('memory.list', JSON.stringify(sortedEntries));

    sortedEntries.forEach((memory) => {
        entryContainer.innerHTML += 
        // update when know how/what information will be displayed
        `<div class="position-relative col-12 border border-secondary rounded my-3 p-3 bg-white">
         <div class="d-flex">
        //  Game image
        // game title
        // entry name
        // a button to view full entry page?
           <h3>${memory.title}</h3>
           <small class="px-1 text-muted align-self-center">${formatDateForMemory(memory.date)}</small>
         </div>
       <button data-date="${memory.date}" class="close-button">Ⓧ</button>
       <p>${memory.description}</p>
       </div>`;
      });
}

// Filtering based on elements