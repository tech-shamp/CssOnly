const express = require("express")
const Path = require("path")

const app = express()
const port = process.env.PORT || 999
const path = Path.join(__dirname, "public")

app.use(express.static(path))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  console.log(req.url)
  res.render("index")
})

app.get("/about", (req, res) => {
  console.log(req.url)
  res.render("about")
})

app.get("/blog", (req, res) => {
  console.log(req.url)
  res.render("blog")
})

app.get("/contact", (req, res) => {
  console.log(req.url)
  res.render("contact")
})

app.get("*", (req, res) => {
  console.log(req.url)
  res.status(404).write("Page Not Found")
})

app.listen(port, console.info(`live on ${port}`))
