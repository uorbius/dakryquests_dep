const Router = require("express")
const router = new Router()
const filmController = require("../controllers/film.controller")

router.get("/get-all", filmController.getAll)
router.get("/get/:id", filmController.getById)
router.get("/get", filmController.paginate)
router.get("/search", filmController.search)

module.exports = router