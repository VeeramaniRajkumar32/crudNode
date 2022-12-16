const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser');
const conn = require('./include/connectionDB')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('hbs',exphbs.engine({layoutsDir:'views/',defaultLayout:'viewCategory',extname: 'hbs'}))
app.set('view engine','hbs')
app.set('views','views')

app.get('/',(req,res)=>{
    let msg = "hello Veera"
    res.render('viewCategory',{msg})
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("I am running..............",port);
});