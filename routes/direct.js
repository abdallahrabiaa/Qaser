const router = require('express').Router();
const {handelDirect}= require('../controllers/direct');
router.route('/:short').get(handelDirect);
module.exports= router;