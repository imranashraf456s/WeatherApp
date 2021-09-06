const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const portNo = process.env.PORT || 8000;

//console.log(__dirname);
const sPath = path.join(__dirname , "../public");
const staticPath = path.join(__dirname , "../templates/views");
const partialPath = path.join(__dirname , "../templates/partials");


app.use(express.static(sPath));

app.set("view engine" , "hbs");
app.set("views" , staticPath);
hbs.registerPartials(partialPath);


app.get("/" , (req , res) => {
    res.render("index");
})
app.get("/about" , (req , res) => {
    res.render("about");
})
app.get("*" , (req , res) => {
    res.render("error404");
})

app.listen(portNo , () => {
    console.log("Port Number: " + portNo);
});