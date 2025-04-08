// Displaying information from local storage onto page
// Could use specific information selected on the overview page and use innerhtml to display on page instead of a template
// Fetch information from local storage, would need to display on overviews page first

// MODIFY FOR PROJECT
/**
 * Renders the memory list. Should be called on initial load
 * and anytime the memory list changes.
 */
const renderMemories = () => {
    memoryContainer.innerHTML='';
    const sortedMemories = memoryList.sort((a, b) => a.date - b.date);
    localStorage.setItem('memory.list', JSON.stringify(sortedMemories));
    
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
  };

