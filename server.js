const express = require("express")
const Path = require("path")

const app = express()
const port = process.env.PORT || 999
const path = Path.join(__dirname, "public")

const titles = {
  tag: "Css Overview",
  home: "Home",
  about: "About",
  blog: "Blog",
  contact: "Contact",
}

app.use(express.static(path))
app.set("view engine", "ejs")
app.use("/css", express.static(Path.join(path, "css")))
app.use("/js", express.static(Path.join(path, "js")))
app.use("/img", express.static(Path.join(path, "img")))

app.get("/", (req, res) => {
  console.log(req.url)
  res.render("index", {
    title: titles.home,
    tag: titles.tag,
  })
})

app.get("/about", (req, res) => {
  console.log(req.url)
  res.render("about", {
    title: titles.about,
    tag: titles.tag,
  })
})

app.get("/blog", (req, res) => {
  console.log(req.url)
  res.render("blog", {
    title: titles.blog,
    tag: titles.tag,
  })
})

app.get("/contact", (req, res) => {
  console.log(req.url)
  res.render("contact", {
    title: titles.contact,
    tag: titles.tag,
  })
})

app.get("*", (req, res) => {
  console.log(req.url)
  res.status(404).write("Page Not Found")
})

app.listen(port, console.info(`live on ${port}`))
