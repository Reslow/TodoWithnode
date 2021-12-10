const express = require("express")
const bodyParser = require("body-parser")
const app = express()
let items = []
app.set("view engine", "ejs")
let jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(express.static("public"))



app.get("/", function (req, res){
    let today = new Date();
    let currentDay = today.getDay()
    
    let options = {
         weekday:"long",
         day:"numeric",
         month:"long"
      }
     let day = today.toLocaleDateString("sv-SE",options)
     
// if(currentDay === 6 || currentDay === 0) {
    // res.write("<h1>Yey! its weekend!  &#128515;<</h1>")
    // res.send()
    // day = "weekend 🔥"
// } else {
    // res.write("<h1>I got to work work work!&#x1F62B;</h1>")
    // res.send()
    // day = "workday 💻"
// }
res.render("list", {kindOfDay:day, newListItems:items})
})

app.post("/",urlencodedParser, (req , res) => {
    console.log(items)
    let item = req.body.newItem
    console.log(item)
    items.push(item)

    res.redirect("/")
})

app.listen(3000, function(){
    console.log("server on 3000")
})