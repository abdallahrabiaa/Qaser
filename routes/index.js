const router= require('express').Router();
const {get}= require('../controllers/index')
const {noPage}=require('../controllers/noPage')
router.route('/').get(get);
router.use(noPage);

module.exports=router;