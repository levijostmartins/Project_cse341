const router = require('express').Router();
const usersRouter = require('./users'); 

router.use('/', require('./swagger'));
  /* #swagger.tags = ['Hello World'] */
  /* #swagger.summary = 'testing' */
router.get('/', (req, res) => {res.send('hello world');});
router.use('/users', usersRouter);

module.exports = router;
