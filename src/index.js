const express = require('express');
const route = require('./routes/route.js');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.json());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://Chetan_ProjectClustor:PNr1Fn8OcRu2cGmk@project1.h4p8xqh.mongodb.net/group9Database", { useNewUrlParser: true })
.then(() => console.log("Mongo db is connected"))
.catch(err => console.log(err))

app.use('/', route);



const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



