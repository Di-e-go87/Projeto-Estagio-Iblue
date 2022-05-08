const express = require('express')
const router = express.Router()
const userRegistrationRepository=require('../infrastructure/repository/user-repository/user-registration-respository')

router.get('/user',async (request,response)=>{
    const getAll = await userRegistrationRepository()
    return response.status(200).json({getAll})
})

module.exports = router