const express= require('express');
const app = express();
const env= require('dotenv').config();
const http = require('http');
const index= require('./routes/index');
const path= require('path');
const mongoose=require('mongoose');
const session = require('express-session');
const sessionStore = require('connect-mongo')(session)
const short = require('./routes/shortIt')
const direct= require('./routes/direct')
const ejs= require('ejs');
app.set('view engine', 'ejs')
app.set('views','views');
app.use(express.static(path.join(__dirname,'public')))
app.use(session({secret:process.env.SESSION_SECRET,resave:true,saveUninitialized:true,cookie:{httpOnly:true,maxAge:36000*24*7},store:new sessionStore({url:process.env.DB_URI,ttl:36000*24*7})}))
const server= http.createServer(app);
app.use(express.urlencoded({extended:false}))
app.use('/direct',direct);
app.use(short);
app.use(index);
mongoose.connect(process.env.DB_URI,
    {useUnifiedTopology:true,useNewUrlParser:true});
    mongoose.connection.on('connected'||'reconneced',()=>{
        server.listen(process.env.PORT||4000);
        console.log('connectd')
    })
mongoose.connection.on('disconnected'||'erorr',(error)=>{
 (erorr)?mongoose.connection.close(true):null;
 console.log(error,'we stop the conniction')

    
})
