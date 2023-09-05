const express = require('express')
const router = express.Router()
const userRouter = require('./users')
const jobRouter = require('./jobs')
const companyRouter = require('./companies')
const { authentication } = require('../middlewares/authentication')

router.use(userRouter)
router.use(jobRouter)
router.use(authentication)
router.use(companyRouter)

// router.use(jobRouter)
// router.use(companyRouter)

module.exports = router