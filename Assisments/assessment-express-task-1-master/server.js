const exp = require("constants");
const express = require("express"),
path = require("path"),
bodyParser = require("body-parser"),
cors = require("cors"),
mongoose = require("mongoose"),
morgan = require('morgan'),
config = require('./config/DB');
const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoute");


mongoose.Promise = global.Promise;
mongoose.connect(config.DB).then(
    ()=>{console.log('Database is connected')},
    err=>{ console.log('Can not connect to the databse' +err)}
);

const app = express();

let corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes)
app.use("/contacts", contactRoutes)

const port = process.env.PORT || 4000;
const server = app.listen(port, function(){
    console.log(' Listening on port ' + port)
})

       