const route = require('express').Router()
const db  = require('../db')


route.post('/registration/',(req,res)=>{
    db.registration(req.body.user_name,req.body.email_id,req.body.contact,req.body.city,
        req.body.pincode,req.body.address,req.body.password)
        .then(()=>res.redirect('/api/registration'))
        .catch((err)=>res.send({error:err}))
})

exports = module.exports ={
    route
}