const express = require('express');
const router = express.Router();
const PlanningController = require('../controllers/PlanningsController.js')

router.get('/', PlanningController.getPlannings)
router.get('/:id', PlanningController.monthlyDetail)
// router.get('/', (_, res) => res.status(200).json({ plannings: undefined }))

module.exports = router;