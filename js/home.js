
const defaultEntries = [
  {
    id: Date.now(),
    videoGameName: "Celeste",
    entryTitle: "My wrist hurts but I'm having fun",
    date: "April 19th, 2025",
    overallThoughtsImg:"https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000006442/691ba3e0801180a9864cc8a7694b6f98097f9d9799bc7e3dc6db92f086759252",
    overallThoughtsImgCaption:"Strawberry with wings 🪽 ",
    // Written by ChatGPT: https://chatgpt.com/share/68059580-f2a4-8009-b99e-80a6c641d11e
    overallThoughtsParagraph:"Celeste was one of those rare games that felt like it was speaking directly to me. The precision platforming was intense—frustrating at times—but every death felt like part of the process rather than a failure. The difficulty never felt unfair; instead, it felt like a challenge to push forward, much like the game’s central theme of climbing your own personal mountain. The story hit me in a surprising way, especially how it explored anxiety, self-doubt, and resilience without being heavy-handed. The music, the art, the quiet little moments—it all came together to create something honest and moving. It wasn’t just about beating a level, it was about understanding why you’re climbing in the first place.",
    keyMomentImg:" https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_700/ncom/software/switch/70010000006442/dd649ca9811831baff09db2e1adbab93f9ac2bbe058d76759c1aef8a2b20b2a6",
    keyMomentImgCaption:"Almost reached the summit 🏔️",
    // Written by ChatGPT: https://chatgpt.com/share/68059580-f2a4-8009-b99e-80a6c641d11e
    keyMomentParagraph:"One key moment in Celeste that really stuck with me was when Madeline literally confronts the darker version of herself—her anxiety and self-doubt—during the hotel chapter and especially in Chapter 6, “Reflection.” There’s a moment when she falls down the mountain, emotionally and physically at her lowest, and finally realizes she can’t just reject this part of herself. She needs to listen, understand, and accept it. That shift—from trying to escape or suppress that inner darkness to integrating it—is such a powerful metaphor for mental health. And when Madeline and her “dark” self team up in Chapter 7, the mechanics even reflect that unity. It’s not just clever—it’s deeply human. That moment felt like the emotional turning point, both for the narrative and for the player.",
    conclusionImg:"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/504230/ss_832ef0f27c3d6efdaa4b5d1cc896dce0999bc9e8.600x338.jpg?t=1714089525",
    conclusionImgCaption:"There's still more?",
    // Written by ChatGPT: https://chatgpt.com/share/68059580-f2a4-8009-b99e-80a6c641d11e
    conclusionParagraph:"Climbing that mountain wasn’t just a test of skill—it was a reflection of something deeper. Celeste reminded me that the journey through doubt, fear, and struggle is just as important as reaching the summit. It’s not about perfection; it’s about persistence, and learning to embrace every part of yourself, even the ones you wish you could push away. It left me feeling seen, challenged, and ultimately uplifted.",
    tags: "Played"
  },
  {
    id: Date.now() + 1,
    videoGameName: "Persona 3 Reload",
    entryTitle: "Being emo has never been so cool",
    date: "February 2nd, 2024",
    overallThoughtsImg:"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2161700/header.jpg?t=1744328458",
    overallThoughtsImgCaption:"So much blue, I don't even like blue that much",
    // Written by ChatGPT:https://chatgpt.com/share/68059580-f2a4-8009-b99e-80a6c641d11e
    overallThoughtsParagraph:"Persona 3 Reload felt like coming back to an old friend, but one who had grown up. It takes the original’s moody, melancholic core and gives it a fresh coat of polish without losing what made it special. The story hits deep—with its themes of mortality and the inevitability of death—but it also gives you light through its social links and character interactions. The new visuals and QoL changes really elevate the whole experience, making Tartarus exploration more bearable and the combat smoother. Spending your limited time wisely, choosing who to talk to, what to study, and when to fight—it all carries this weight that makes your choices feel meaningful. It’s a game that lingers with you, long after the credits roll.",
    keyMomentImg:"https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2161700/ss_b5b93089686b45d6abee593d025c91389c7dc20e.1920x1080.jpg?t=1744328458",
    keyMomentImgCaption:"So cool ⭐️",
    // Written by ChatGPT: https://chatgpt.com/share/68059580-f2a4-8009-b99e-80a6c641d11e
    keyMomentParagraph:"In Persona 3 Reload, the key moment that absolutely gutted me—still does—is when Shinjiro dies. Even knowing it was coming from the original, the way it’s handled in Reload hits harder with the upgraded visuals, voice acting, and pacing. His arc was all about guilt, redemption, and doing what little he could with the time he had left. His death isn’t just a tragic event; it’s a brutal reminder of the game’s core theme: that death is inevitable, but how we live until that moment matters. The silence after he’s gone, the reactions of the team—especially Akihiko—it all feels so raw. It’s one of those moments that makes you sit with the weight of it, not just as a plot point, but as something that feels painfully real.",
    conclusionImg:"https://i.scdn.co/image/ab67616d0000b273d8ff4bc4a6a3f1beefbeb26c",
    conclusionImgCaption:"Playing this soundtrack rn 🎧",
    // Written by ChatGPT: https://chatgpt.com/share/68059580-f2a4-8009-b99e-80a6c641d11e
    conclusionParagraph:"Persona 3 Reload is a beautiful, melancholic meditation on time, death, and the bonds we forge in between. It doesn’t offer easy answers, but it gives weight to every choice, every relationship, every quiet night under a starless sky. In the end, it’s not just a game about fighting shadows—it’s about finding light in fleeting moments and facing the inevitable with courage. It stayed with me like a memory I lived through, not just played.",
    tags: "Played"
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
const journalEntryBtn = document.querySelector(".createEntryBtn")
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

// By default the jounrla entry form is hidden 
journalEntryForm.classList.add("hidden");
confirmScreen.classList.add("hidden");


// When you click, create Entry btn, I want the overview previews & filters to disappear and the form to come in its palce
journalEntryBtn.addEventListener("click", e => {
  document.querySelector(".journalPreviews").classList.add("hidden");
  journalEntryBtn.classList.add("hidden");
  journalEntryForm.classList.remove("hidden");
})

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

        <button onClick=location.reload()>View All Journal Entries</button>

        <button class="anotherEntryBtn">Create another journal entry</button>
    `
    document.querySelector(".anotherEntryBtn").addEventListener("click", e => {
      confirmScreen.innerHTML=""
      journalEntryForm.classList.remove("hidden");
    })
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
          overallThoughtsImg: overallImgInput.value,
          overallThoughtsImgCaption: overallImgCaptionInput.value,
          overallThoughtsParagraph: overallParagraphInput.value,
          keyMomentImg: keyImgInput.value,
          keyMomentImgCaption: keyImgCaptionInput.value,
          keyMomentParagraph: keyParagraphInput.value,
          conclusionImg: conclusionImgInput.value,
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
    const defaultImg = "https://cdn.shopify.com/s/files/1/1083/2612/files/mymelody2_480x480.png?v=1721111506"

    entries.forEach((entry) => {
      entriesContainer.innerHTML += 
        `
        <div class="position-relative col-12 border border-secondary rounded my-3 p-3 ">
          <h2>${entry.entryTitle}</h2>
          <img src=${entry.overallThoughtsImg || defaultImg} alt="">
         <div class="d-flex">
          <h3>${entry.videoGameName}</h3>
          <small class="px-1 text-muted align-self-center">${entry.date}</small>
         </div>
       <p class="taggedEntry"> ${entry.tags} </p>
      <a href='entry.html?id=${entry.id}'><button>View Journal Entry</button></a> 
       </div>`;
      });

}

renderEntries();


// Filtering based on tags
const tagList = ["Played", "Did Not Finish", "Playing", "Watched", "Not Played"]
const renderTagFilters = () => {
  entryFilter.innerHTML = "";
  entryFilter.innerHTML += `<p> Filters </p>`;
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