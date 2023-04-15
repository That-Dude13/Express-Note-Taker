const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
router.get('/', (req, res) => {
  readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

// GET Route for a specific note
router.get('/:notes_id', (req, res) => {
  const noteId = req.params.notes_id;
  readFromFile('./db/notes.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((notes) => notes.notes_id === noteId);
      return result.length > 0
        ? res.json(result)
        : res.json('No note with that ID');
    });
});

// DELETE Route for a specific note
router.delete('/:note_id', (req, res) => {
  const noteId = req.params.notes_id;
  readFromFile('./db/notes.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all notes except the one with the ID provided in the URL
      const result = json.filter((note) => note.notes_id !== noteId);

      // Save that array to the filesystem
      writeToFile('./db/notes.json', result);

      // Respond to the DELETE request
      res.json(`Item ${noteId} has been deleted 🗑️`);
    });
});


router.post('/', (req, res) => {
  console.log(req.body);

  const { username, topic, note } = req.body;

  if (req.body) {
    const newnote = {
      username,
      note,
      topic,
      notes_id: uuidv4(),
    };

    readAndAppend(newnote, './db/notes.json');
    res.json(`note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});

module.exports = router;
