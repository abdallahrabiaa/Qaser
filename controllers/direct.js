const model = require('../models/shortUrls');
exports.handelDirect=async(req,res,next)=>{
 const shortUrl = req.params.short;
 const url=await model.findOne({shortUrl:shortUrl}).exec();
 if(url){
    url.clicks++;
    url.save()
   res.redirect(url.fullUrl);
   
 } 
 res.redirect('/')
}