const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');

const items = require('./routes/api/items');

const app = express();


app.use(bodyParser.json());

// DB config

const db = require('./config/keys').MongoDBUrl;

//connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('mongolDB is connected :O'))
    .catch(err => console.log(err));


// Use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));