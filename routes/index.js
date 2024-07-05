const { Router } = require('express');
const searchRoutes = require('./searchRoutes');

const router = Router();

router.use('/api', searchRoutes);

module.exports = router;
