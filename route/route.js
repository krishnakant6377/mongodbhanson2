const route = require("express").Router()
const {insertemployeeDb}=require('../controller/employee')
route.post("/employee", insertemployeeDb)
module.exports = route