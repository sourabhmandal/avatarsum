var express = require('express');
var app = express();
var port = 4000;
var mongoose = require('mongoose');
var PalleteRouter = require('./Routes/Pallete');
var PandaRouter = require('./Routes/Panda');
var dotenv = require('dotenv');
var cors = require('cors');

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/pallete/', PalleteRouter);
app.use('/panda/', PandaRouter);

app.get('/', (req, res) => {
  res.send('Avatarsum running');
});

mongoose
  .connect(process.env['DATABASE_URI'], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MONGODB CONNECTED');
    app.listen(port, () => {
      console.log(`AVATARSUM BACKEND listening at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
