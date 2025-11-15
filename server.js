const express = require("express");
const app = express();
const mongodb = require("./data/database.js");
const bodyParser = require("body-parser")


const port = process.env.PORT || 3000;


app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Header',
        'Origin, X-requested-with, Content-Type, Accept, Z-key'
    );
    res.setHeader('Access-Control-Allows-Methods', 'GET, POST,PUT, DELETE, OPTIONS');
    next();
});
app.use('/', require("./routes"));


mongodb.initDb((err) => {
    if(err) {console.log(err);}
    else{app.listen(port, () => (console.log(`Running on port 3000`)));};
})

