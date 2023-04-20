const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/DB');
const userRoute = require('./routes/userRoute');

const PORT = process.env.PORT || 7000;

mongoose.Promise = global.Promise
mongoose.set('strictQuery', false);
mongoose.connect(config.DB).then(
  () => { console.log('Database is connected') },
  err => { console.log('Can not connect to the database' + err) }
);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))
app.use('/users', userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});