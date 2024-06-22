const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 3000

const projects = require("./projects.json")
const about = require("./about.json")
const contact = require("./contact.json")

app.use(cors())

app.get("/", (req, res) => {
    res.send('Hello')
})

app.get("/projects", (req, res) => {
    res.json(projects)
})

app.get("/about", (req,res) => {
    res.json(about)
})

app.get("/contact", (req, res) => {
    res.json(contact)
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})