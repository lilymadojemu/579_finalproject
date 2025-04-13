// Grabbing the unique journal entry id from the search URL
const urlParams = new URLSearchParams(window.location.search);
const entryId = urlParams.get('id'); // This is the unique ID for the journal entry

// Get the list of entries from local storage
const entryList = JSON.parse(localStorage.getItem("entry.list")) || [];

// Ensure that the url id matches an id in entry list
const matchingEntry = entryList.find(entry => entry.id === Number(entryId));

// DOM Elements from entry page
const journalEntry = document.querySelector("#entryContainer")
const moreEntries = document.querySelector("#otherEntries")

// Displaying information from local storage onto page for specific entry
const renderEntry = (matchingEntry) => {
  if (!matchingEntry) {
    // Handle case where ID doesn't match any entry (e.g., show error message)
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

// Populate the other entries page
const viewMoreEntries = () => {
  moreEntries.innerHTML="";
};
