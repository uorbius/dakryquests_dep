require("dotenv").config({path: `.${process.env.NODE_ENV}.env`})
const sql = require("sqlite3").verbose()
const express = require("express")
const routes = require("./routes")
const path = require("path")
const cors = require("cors")

const app = express() 

app.use(express.json({ extended: true }))

app.use("/api", routes)

if (process.env.NODE_ENV === 'prod') {
    app.use('/', express.static(path.join(__dirname, "..", 'client', 'build')))
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, "..", 'client', 'build', 'index.html'))
    })
  }


async function bootstrap() {
    try {
        app.listen(process.env.PORT, () => console.log(`\n App has been started on port ${process.env.PORT} \n`))
    } catch(e) {
        console.log(e)
    }
}

bootstrap()   