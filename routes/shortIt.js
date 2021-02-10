const router=require('express').Router();
const {post}= require('../controllers/shortUrl')
router.route('/short-it').post(post)

module.exports=router;