// Default Games (To Be changed)
const defaultEntries = [
    {
      title: 'Water',
      date: 1149566400000,
      description: 'I went to a pool and swam around and splashed a few times and jumped off the diving board.'
    },
    {
      title: 'Coaster',
      date: 655531200000,
      description: 'Zoomed around on a roller coaster, going up down and on curves. Went way fast and did not drop my phone.'
    }
  ];
  
// Grabbing DOM elements from form  (UPDATE FOR VIDEO GAME JOURNAL)
const memoryContainer = document.querySelector('#memory-container');
const titleInput = document.querySelector("#title");
const dateInput = document.querySelector("#date");
const descriptionInput = document.querySelector("#description");
const addMemoryButton = document.querySelector("#add-memory");

// Render preview of journal entries based on information from local storage

// If localStorage has a 'memory.list' item, it uses that,
// otherwise it uses defaultEntries.
let entryList = localStorage.getItem('entry.list') ? JSON.parse(localStorage.getItem('entry.list')) : defaultGames;

// Putting entry previews on the page based on what is in local storage
const renderEntries = () => {
    // Abstract example of what I'll need to do; will populate overviews page using innerhtml and grabbing info from each element in entryList 

    sortedMemories.forEach((memory) => {
        memoryContainer.innerHTML += `<div class="position-relative col-12 border border-secondary rounded my-3 p-3 bg-white">
         <div class="d-flex">
           <h3>${memory.title}</h3>
           <small class="px-1 text-muted align-self-center">${formatDateForMemory(memory.date)}</small>
         </div>
       <button data-date="${memory.date}" class="close-button">Ⓧ</button>
       <p>${memory.description}</p>
       </div>`;
      });
}






// Filtering based on elements
