const diaryForm = document.querySelector("#diaryForm") 
const diaryList = document.querySelector("diaryList")

diaryForm.addEventListener ("submit", insertEntry);

async function insertEntry (e) {
    e.preventDefault()

    const category= document.querySelector("#category");
    const diaryText= document.querySelector("#diaryText");

  try {
    const response = await fetch("http://localhost:3000/diary");
        METHOD: "POST"
        Headers: {
            "Content-Type"; "application/json"
        }
    
        body: JSON.stringify({
            category:category,
            diaryText: diaryText
        })
            
    const newEntry = await response.json();

    addEntryToList(newEntry);
    diaryForm.reset();

  } catch (error) {
    console.error("Error inserting entry");
  }
}

function addEntryToList(entry){
    const li = document.createElement("li");
    li.textContext = `${entry.category}`;
    diaryList.appendChild(li)
}