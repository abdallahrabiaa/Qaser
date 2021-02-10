const urlModel= require('../models/shortUrls');
exports.post=async(req,res,next)=>{
   const fullUrl=req.body.fullUrl;
const newurl= await urlModel.create({fullUrl:fullUrl});
(req.session.Urls)?req.session.Urls.push(newurl._id):req.session.Urls=[newurl._id];
res.redirect('/')
}