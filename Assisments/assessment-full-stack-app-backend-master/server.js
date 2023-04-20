const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const config = require('./config/DB');
const userRoute = require('./routes/userRoute');
const postRoute= require('./routes/postRoute');

const PORT = process.env.PORT || 8000;

mongoose.Promise = global.Promise
mongoose.set('strictQuery', false);
mongoose.connect(config.DB).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(morgan('dev'));
app.use(cors(corsOptions))
app.use('/users', userRoute);
app.use('/posts', postRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});