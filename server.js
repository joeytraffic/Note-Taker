const express = require("express");
const path = require("path");
const api = require("./routes/index.js");
const notesRouter = require("./routes/notes.js");

const PORT = process.env.PORT || 3001;

const app = express();

app.use("/api", api);

app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.use("/api/notes", notesRouter);
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
