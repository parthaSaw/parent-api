var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
const checkAuth = require('../auth')

const BASE_URL = 'http://localhost:3001'
const api = apiAdapter(BASE_URL)

router.get('/s1',checkAuth,(req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

module.exports = router