const fs = require('fs');
const path = require('path');

// gets the information sent from the user and adds it to the notes db
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

function findById(id, notes) {
    const result = notes.filter(note => note.id === id)[0];
    return result;
}


module.exports = {
    createNewNote,
    findById
}