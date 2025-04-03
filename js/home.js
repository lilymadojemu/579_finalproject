// Enabling interactivity of journal entry form

// Capture form data and save it as an object to local storage
// https://stackoverflow.com/questions/17087636/how-to-save-data-from-a-form-with-html5-local-storage

const captureEntry= () => {
    // Don't forget entry.list (localstorage) will be establish in this function!
    console.log('Entry Captured!')
}

// In order for captureEntry to happen, add event listener to submit button to capture the appropriate data
document.querySelector('#formSubmit').addEventListener('click', captureEntry);


// Wishlist Enablement