const router = require('express').Router();
const usersRouter = require('./users'); 

router.get('/', (req, res) => {res.send('hello world');});
router.use('/users', usersRouter);

module.exports = router;
