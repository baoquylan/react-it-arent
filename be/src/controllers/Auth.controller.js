const { ResponseData } = require('../util/ResponseData.util')
const fs = require('fs')
const path = require("path");
const jwt  = require("jsonwebtoken");
const { jwtKey } = require('../config');

let localPath = path.join(__dirname, '../data')

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const rawUsers = await fs.readFileSync(`${localPath}/user.json`)
        const dataUsers = JSON.parse(rawUsers);
        let index = dataUsers.findIndex(x => { return x?.name === email })
        if (index < 0) {
            throw new Error('Cannot find this user')
        }
        if (dataUsers[index].password !== password) {
            throw new Error('The password is not correct')
        }
        let token = jwt.sign(
            {
                email
            },
            jwtKey
        );
        res.status(200).json(new ResponseData(true, token, ""));
    } catch (ex) {
        res.status(400).json(new ResponseData(false, null, ex.message));
    }
}

const validate = async (req, res, next) => {
    try {
        const {email } = req.decoded
        const rawUsers = await fs.readFileSync(`${localPath}/user.json`)
        let dataUsers = JSON.parse(rawUsers);
        let index = dataUsers.findIndex(x => { return x?.name === email })
        if (index < 0) {
            throw new Error('Cannot find this user')
        }
        let userData = dataUsers[index]
        res.status(200).json(new ResponseData(true, userData, ""));
    } catch (ex) {
        res.status(400).json(new ResponseData(false, null, ex.message));
    }

}
module.exports = {
    login,
    validate
}