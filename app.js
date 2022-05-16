const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views"); // specify the views directory
app.set("view engine", "ejs"); // register the template engine

app.get("/", (req, res) => {
  const hobby = [
    { name: "game" },
    { name: "read book" },
    { name: "streaming" },
  ];
  res.render("index", {
    name: "Ivan Alissetiyan",
    umur: 23,
    hobby: hobby,
  });
});

app.get("/:nama", (req, res) => {
  res.send(`Nama Saya : ${req.params.nama}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
