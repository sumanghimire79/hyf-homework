/* Suman Ghimire js1-w3 note-taking-app  */


/* to save note in the notes[] */
const notes = [];

    /*
            // function to add note (of type object) in to the empty array called notes
            function saveNote(content, id) {
                notes.push({
                    "content": content,
                    "id": id
                })
            }
    */
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
//saveNote("Does laundry", 2); // allow only single id entries

console.log("\n");
console.log(notes);
console.log("\n");

/* to see specific note  */
function getNote(id) {
    // your code here
    // loops through the ids and if that exists , prints message - error string
    for (const note of notes) {
        if (note.id === id) {
            console.log(id);
        } console.log("Error string \n\n");
    }
}
console.log(getNote(1)); 
// {content: 'Pick up groceries', id: 1}

console.log("this above is showing undefined \n\n");


/* To read all the saved notes from the notes array */
function logOutNotesFormatted() {
    // your code here
    for (const note of notes) {
        console.log("The note with id:" + note.id + ", " + "has the following note text registered : " + note.content + "\n\n");
    }
}
logOutNotesFormatted(); // should log out the text below
// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry


/* one of the uniq feature can be that it does not allow duplicate id entry */
function saveNote(content, id) {
    let idExistence = false;

    for (const checkId of notes) {
        if (id === checkId.id) {
            idExistence = true;
            break;
        }
    }
    if (idExistence === false) {
        notes.push({
            "content": content,
            "id": id
        })
        return "This id " + id+ " does not exsist in the array. So, it is added successfully \n\n";
        }else {
        return "This id " + id+ " is already exists. So, it is not added in the array \n\n";
    }
}
console.log(saveNote("ihi", 7));
console.log(saveNote("ihi", 2)); // allows to entry the same value with different id
console.log(notes);


