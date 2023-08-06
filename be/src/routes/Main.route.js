const express = require('express')
const { MainController } = require('../controllers/index.js');
const { validateToken } = require('../services/Validation.service.js');


const router = express.Router();



router.get("/menu", validateToken, MainController.getMenu);
router.get("/diary", validateToken, MainController.getDiary);
router.get("/column",  MainController.getColumn);

module.exports = router;
