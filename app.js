const express = require('express')
const app = express()
const path = require('path') 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/pages',require('./routes/page').route)
app.use('/api',require('./routes/api').route)


app.listen(8000,()=>console.log(" SERVER RUN ON localhost:8000"));