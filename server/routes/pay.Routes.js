const { Router } = require("express")
const payController = require("../controller/pay.Controller")
const router = Router()


router.post("/pay", payController)


module.exports = router
