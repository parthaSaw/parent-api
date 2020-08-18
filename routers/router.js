var express = require('express');
var router = express.Router()
var s1Service = require('./s1')
var s2Service = require('./s2')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(s1Service)
router.use(s2Service)

module.exports = router