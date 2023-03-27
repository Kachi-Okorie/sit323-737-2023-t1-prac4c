var express = require("express");
var router = express.Router();
var arithimeticController = require("../controllers/arithimeticController");
var auth = require("../middleware/auth")();
router.get("/add", auth.authenticate(), arithimeticController.get_add);
router.get("/subtract", auth.authenticate(), arithimeticController.get_subtract);
router.get("/multiply", auth.authenticate(), arithimeticController.get_multiply);
router.get("/divide", auth.authenticate(), arithimeticController.get_divide);

module.exports = router;
