const testService = require("../services")

const getHi = (req, res) =>{
    res.send(testService.getHi())
}

module.exports = {
    getHi
}