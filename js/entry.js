// DOM Elements from entry page
const journalEntry = document.querySelector("#entryContainer")


// Displaying information from local storage onto page
// Could use specific information selected on the overview page and use innerhtml to display on page instead of a template
// Fetch information from local storage, would need to display on overviews page first

// MODIFY FOR PROJECT
/**
 * Renders the memory list. Should be called on initial load
 * and anytime the memory list changes.
 */

// Use entryList, try without restating first
const renderEntry = () => {
    journalEntry.innerHTML="";

    // HOW TO KNOW WHAT ENTRY TO SHOW
    // By using a unique ID for each entry and linking it via the URL parameters, you’re setting up a solid, scalable way to pass and load the correct entry details.
  // Here’s a quick recap of what you’ve figured out:
  // •	Generate a unique ID when saving an entry to localStorage. This ID ensures that even if the game titles are the same, each entry can still be uniquely identified.
  // •	Use URL parameters (like ?id=12345) to pass the unique entry ID to the detail page.
  // •	Create a clickable button for each entry on the overview page, linking to entry.html?id=entryID.
  // •	On the entry page, use the ID from the URL to fetch the correct entry data from localStorage and display it.


    const sortedMemories = memoryList.sort((a, b) => a.date - b.date);
    localStorage.setItem('memory.list', JSON.stringify(sortedMemories));
    
    // Create the html structure of the entry
    entryList.forEach((entry) => {
      memoryContainer.innerHTML += `<div class="position-relative col-12 border border-secondary rounded my-3 p-3 bg-white">
       <div class="d-flex">
         <h3>${memory.title}</h3>
         <small class="px-1 text-muted align-self-center">${formatDateForMemory(memory.date)}</small>
       </div>
     <button data-date="${memory.date}" class="close-button">Ⓧ</button>
     <p>${memory.description}</p>
     </div>`;
    });
  };

