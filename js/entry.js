
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

// Grabbing the unique journal entry id from the search URL
const urlParams = new URLSearchParams(window.location.search);
// This is the unique ID for the journal entry
const entryId = urlParams.get("id");
// Get the list of entries from local storage
let entryList = localStorage.getItem('entry.list') ? JSON.parse(localStorage.getItem('entry.list')) : defaultEntries;
// Save default entries to localStorage if entry.list doesn't already exist
if (!localStorage.getItem("entry.list")) {
    localStorage.setItem("entry.list", JSON.stringify(defaultEntries));
}
// Ensure that the url id matches an id in entry list
const matchingEntry = entryList.find(entry => entry.id === Number(entryId));

// DOM Elements from entry page
const journalEntry = document.querySelector("#entryContainer")
const moreEntries = document.querySelector("#otherEntries")

// Displaying information from local storage onto page for specific entry
const renderEntry = (matchingEntry) => {
  if (!matchingEntry) {
    // Handle case where ID doesn't match any entry 
    console.error("No entry found with ID:", entryId);
    journalEntry.innerHTML = "<p>Entry not found.</p>";
    return;
  }
  document.querySelector(".entryHeader h1").innerHTML = matchingEntry.entryTitle;
  const defaultImg = "https://cdn.shopify.com/s/files/1/1083/2612/files/mymelody2_480x480.png?v=1721111506"

  journalEntry.innerHTML += 
  `      
    <section tabindex="0" class="introduction">
      <p>${matchingEntry.videoGameName}</p>
      <p>${matchingEntry.date}</p>
      <p>${matchingEntry.tags}</p>
    </section>

    <section tabindex="0">
      <figure>
        <img src=${matchingEntry.overallImgAddress || defaultImg} alt="">
        <figcaption>${matchingEntry.overallThoughtsImgCaption}</figcaption>
      </figure>
      <h2>Overall Thoughts</h2>
      <p>${matchingEntry.overallThoughtsParagraph || "No Thoughts"}</p>
    </section>

    <section tabindex="0">
      <figure>
        <img src=${matchingEntry.keyImgAddress || defaultImg} alt="">
        <figcaption>${matchingEntry.keyImgCaption}</figcaption>
      </figure>
      <h2>Key Moment(s)</h2>
      <p>${matchingEntry.overallThoughtsParagraph || "No Thoughts"}</p>
    </section>

    <section tabindex="0">
      <figure>
        <img src=${matchingEntry.conclusionImgAddress || defaultImg} alt="">
        <figcaption>${matchingEntry.conclusionImgCaption}</figcaption>
      </figure>
      <h2>Conclusion</h2>
      <p>${matchingEntry.conclusionThoughtsParagraph || "No Thoughts"}</p>
    </section>
    ` 
  };

renderEntry(matchingEntry);

// Show a preview of the entries that the user has recently made
const viewRecentEntries = () => {
  moreEntries.innerHTML="";
};
