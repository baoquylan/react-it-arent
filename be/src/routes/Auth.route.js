const express = require('express')
const { LoginController } = require('../controllers/index.js');
const { validateToken } = require('../services/Validation.service.js');


const router = express.Router();


router.post("/login", LoginController.login);
router.get("/", validateToken, LoginController.validate);

module.exports = router;
