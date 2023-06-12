const express = require("express");
const path = require("path");
const api = require("./routes/index.js");
// const notesRouter = require("./routes/notes.js");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.use("/api", api);
// app.use("/api/notes", notesRouter);

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/pages/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
