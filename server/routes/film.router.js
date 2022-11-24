const Router = require("express")
const router = new Router()
const filmController = require("../controllers/film.controller")
const authMiddleware = require("../middlewares/auth.middleware")

router.get("/get-all", authMiddleware, filmController.getAll)
router.get("/get/:id", authMiddleware, filmController.getById)
router.get("/get", authMiddleware, filmController.paginate)
router.post("/search", authMiddleware, filmController.search)

module.exports = router