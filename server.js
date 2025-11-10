const express = require('express')
const app = express()
const mongoose = require('mongoose')

const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')


require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

connectDB()

app.use('/', mainRoutes)


app.listen(process.env.PORT, ()=> {
    console.log('Server is running, you better catch it!')
})

// lets add a conect to a db
// connect to db
// things to do set up home page then a login page 
// after that add todo that are on the server 
//