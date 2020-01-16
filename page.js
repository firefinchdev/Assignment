const route = require('express').Router()
const db = require('../db')


route.get('/registration',(req,res)=>{
    res.render('registration.html',{user})
})

route.post('/registration',(req,res)=>{
db.registration(req.body.user_name,req.body.email_id,req.body.contact,req.body.city,
    req.body.pincode,req.body.address,req.body.password)
    .then(()=>{
        res.redirect('.')
    })
    .catch((err)=>{
        res.send(err)
    })
})


exports = module.exports ={
    route
}