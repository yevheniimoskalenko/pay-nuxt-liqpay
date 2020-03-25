const { Router } = require("express")
const payController = require("../controller/pay.Controller")
const resultController = require("../controller/result.controll")
const router = Router()


router.post("/pay", payController)
router.post("result", resultController)


module.exports = router
