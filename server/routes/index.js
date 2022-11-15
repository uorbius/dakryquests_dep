const Router = require("express")
const filmRouter = require("./film.router")

const router = new Router()

router.use("/film", filmRouter)

module.exports = router