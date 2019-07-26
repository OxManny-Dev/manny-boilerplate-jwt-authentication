const router      = require('express').Router();
const authRoutes  = require('./authRoutes');

// / api prepended to these routes
router.use('/auth', authRoutes);

module.exports = router;