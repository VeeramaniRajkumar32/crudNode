const express = require('express')
const app = express()
const mongoose = require("../include/mongoDB")
const categorySchema = require("../model/categoryModel")
const postSchema = require("../model/postModel")
const router = require("express").Router();
//
// const exphbs = require('express-handlebars')
// app.set('view engine','hbs')
// app.set('views','views')
// app.engine('hbs',exphbs.engine({layoutsDir:'../views',defaultLayout:'post',extname: 'hbs'}))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

router
    // .get("/", (req, res) => {
    //     res.render("hi")
    // })
    .get("/all", (req, res) => {
        // postSchema.find((err, data) => {
        categorySchema.find((err, data) => {
        if (err) {
          console.log(err);
        } else {
            if(data){
                console.log(data)
            }
            res.render('../views/post.ejs',{data:data})
        }
      });
    })
    // .post("/create",)
    
module.exports = router;