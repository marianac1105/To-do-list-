const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const date = require(__dirname + "/date.js")
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(express.static("public"))

let items = ["Brush your teeth"]
let itemsWork = []

const day = date.getDate()
app.get("/", function(req, res) {


  // var day = today.getDay();
  // var week = ["Sunday","Monday","Tuesday","Wednesday","Thurdays", "Friday","Sartuday"]


  // res.render('index', {
  //   dayWeek: week[day]
  // });


  res.render('index', {
    dayWeek: day,
    newItem: items,
    list: "home"
  });
})

app.post("/", function(req, res) {
  let item = req.body.task
  if (req.body.button == "work") {
    itemsWork.push(item)
    res.redirect("/work")
  } else {
    items.push(item);
    res.redirect("/")
  }
})

// work page

app.get("/work", function(req, res) {
  res.render("index", {
    dayWeek: day,
    newItem: itemsWork,
    list: "work"

  })
})


// About page

app.get("/about", function(req, res) {
  res.render("about")
})
app.listen(3000, function() {
  console.log("listening to port 3000")
})
