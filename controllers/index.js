const model = require('../models/shortUrls')
exports.get=async(req,res,next)=>{
    const Urls = req.session.Urls;
    const Data=await  getAllFromSession(Urls);
      return res.render('index',{Data:Data});
}

 async function getAllFromSession(session){
     let Urls =[];
     for (let index = 0; index < session.length; index++) {
         const id = session[index];
          const Url = await model.findById(id).exec();
          console.log(Url)
          Urls[index]=Url;
         
     }   return Urls;
}