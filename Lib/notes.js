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

function findByIdAndDelete(id, notesArray) {
    const result = notesArray.filter(note => note.id !== id);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify({ notes: result }, null, 2));
}


module.exports = {
    createNewNote,
    findById,
    findByIdAndDelete
}