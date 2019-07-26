const router    = require('express').Router();
const apiRoutes = require('./apiRoutes');

// Setup API routes
// prepends /api to all of the routes declared in this file

router.use('/api', apiRoutes);

module.exports = router;