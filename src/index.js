const express = require('express');
const route = require('./routes/route.js');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.json());

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://Soumyaranjan:utnipsom@soumya-db.3rzvirb.mongodb.net/task-management", { useNewUrlParser: true })
.then(() => console.log("Mongo db is connected"))
.catch(err => console.log(err))

app.use('/', route);



const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



