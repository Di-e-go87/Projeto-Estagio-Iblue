const express = require('express')
const app = express()
const userModel = require('./infrastructure/database/building-modeling-structure').cadastro_usuario
const router = require('./routes/router')
const port = 3000
userModel.USER_REGISTRATION_MODEL.sync()
app.use(router)
app.listen(port, () => console.log(`Example app listening on port ${port}!`));