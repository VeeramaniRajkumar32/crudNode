const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const postRouter = require('./controller/postRouter')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(postRouter)
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("I am running..............",port);
});