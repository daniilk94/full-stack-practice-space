const Note = require('../models/note')

const initialNotes = [
  {
    content: 'Admin is here',
    important: true,
  },
  {
    content: 'Browser can execute only JavaScript',
    important: true,
  },
]

const nonExistingId = async () => {
  const note = new Note({ content: 'willremovesoon' })
  await note.save()
  await note.deleteOne()

  return note._id.toString()
}

const notesInDb = async () => {
  const notes = await Note.find({})
  return notes.map((note) => note.toJSON())
}

module.exports = {
  initialNotes,
  nonExistingId,
  notesInDb,
}
