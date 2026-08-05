const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];
const url = `mongodb+srv://admin:${password}@clust.vlxmraa.mongodb.net/noteApp?appName=Clust`;

mongoose.set("strictQuery", false);

mongoose.connect(url, { family: 4 });

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
  content: "Admin is here",
  important: true,
});

/*
note.save().then((result) => {
  console.log(result.content);
  console.log("note saved!");
  mongoose.connection.close();
});
*/

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
