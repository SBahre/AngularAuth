const express = require("express");
const bodyParser = require("body-parser");
const api = require("./routes/api");
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use("/api", api);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
