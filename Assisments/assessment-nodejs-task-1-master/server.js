const express = require("express"),
path = require("path"),
bodyParser = require("body-parser"),
cors = require("cors"),
mongoose = require("mongoose"),
config = require('./config/DB');
const userRoutes = require('./routes/userRoutes')

mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    ()=>{console.log('Database is connected')},
    err=>{ console.log('Can not connect to the databse' +err)}
);


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  }); 
  
app.use('/users', userRoutes)


const port = process.env.PORT || 6000;
const server = app.listen(port, function(){
    console.log(' Server is running  on port ' + port)
})