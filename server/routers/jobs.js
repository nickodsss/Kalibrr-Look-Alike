const express = require('express')
const router = express.Router()
const JobController = require('../controllers/jobController')
const { authentication } = require('../middlewares/authentication')

router.post('/jobs', authentication, JobController.createJob)
router.get('/jobs', JobController.readJob)
router.get('/jobs/:id', JobController.readJobDetail)
router.put('/jobs/:id', authentication, JobController.editJob)
router.delete('/jobs/:id', authentication, JobController.deleteJob)


module.exports = router