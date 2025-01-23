const express = require("express")
const fs = require("fs")

const app = express()

const PORT = 8080

app.get("/", (req, res) => {
    const indexHTML = fs.readFileSync(__dirname + "/html/index.php", "utf-8")
    res.send(indexHTML)
    })

app.use("/css", express.static(__dirname + "/css/"))

app.get("/*", (_, res) => {
    const HTML = fs.readFileSync(__dirname + "/html/404.html", "utf-8")
    res.send(HTML)
})

app.use("/css", express.static(__dirname + "/css/"))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})