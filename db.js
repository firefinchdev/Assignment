const mysql = require('mysql2')
const connection  = mysql.createConnection({
    host:'localhost',
    database:'assignment',
    user:'root',
    password:'root'

})

function registration(user_name,email_id,address,city,pincode,contact,password){
   return new Promise((resolve,reject)=>{
   connection.query(
       `INSERT INTO user(user_name,email_id,address,city,pincode,contact,password) VALUES(?,?,?,?,?,?,?)`,
       [user_name,email_id,address,city,pincode,contact,password],
       (err,results)=>{
           if(err){
               reject(err)
           }else{
               resolve()
            
           }
       }
   )
   })
}

exports = module.exports={
    registration
}