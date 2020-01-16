    const mysql = require('mysql2')
    const connection  = mysql.createConnection({
        host:'localhost',
        database:'assignment',
        user:'root',
        password:'root'

    })
    // connection.query(
    //     `CREATE TABLE IF NOT EXISTS  user(
    //         user_id	INTEGER(10) NOT NULL,
    //         user_name VARCHAR(30) NOT NULL,
    //         city VARCHAR(30) NOT NULL,
    //         pincode VARCHAR(10) NOT NULL,
    //         address VARCHAR(100) NOT NULL,
    //         email_id VARCHAR(50) PRIMARY KEY, 
    //         contact	VARCHAR(20) NOT NULL,
    //         password VARCHAR(30) NOT NULL
            
    //     )`,
    //     (err,results)=>{
    //         if(err){
    //             console.log(err);
    //         }else{
    //             console.log("TABLE ARE CREATED SUCCESFULLY")
    //         }connection.close()
    //     }
    // )
    // connection.query(
    //     `CREATE TABLE IF NOT EXISTS product(
    // product_id INTEGER(10) AUTO_INCREMENT PRIMARY KEY,
    // product_name VARCHAR(50) NOT NULL,
    // Price INTEGER(10) NOT NULL,
    // Description	VARCHAR(200) NOT NULL,
    // Image VARCHAR(200) NOT NULL,
    // Category VARCHAR(30) NOT NULL,
    // Available VARCHAR(20) NOT NULL

    //     )`,
    //     (err,results)=>{
    //         if(err){
    //             console.log(err);
    //         }else{
    //             console.log("TABLE ARE CREATED SUCCESFULLY")
    //         }connection.close()
    //     }
    // )
    // connection.query(
    //     `CREATE TABLE IF NOT EXISTS  cart(
    //         cart_id	INTEGER(10)	AUTO_INCREMENT PRIMARY KEY,
    //         email_id VARCHAR(50) NOT NULL,
    //       product_id INTEGER(10) NOT NULL,
    //         product_name VARCHAR(50) NOT NULL,
    //         Price INTEGER(10) NOT NULL,
    //         product_qut INTEGER(10)	NOT NULL,
    //         Amount INTEGER(20) NOT NULL,
    //         FOREIGN KEY(email_id) REFERENCES user(email_id),
    //         FOREIGN KEY(product_id) REFERENCES product(product_id)
    
    //     )`,
    //     (err,results)=>{
    //         if(err){ 
    //             console.log(err);
    //         }else{
    //             console.log("TABLE ARE CREATED SUCCESFULLY")
    //         }connection.close()
    //     }
    // )
    // connection.query(
    //     `CREATE TABLE IF NOT EXISTS feedback(
    // feed_id INTEGER(10)	AUTO_INCREMENT PRIMARY KEY,
    // email_id VARCHAR(50) NOT NULL,
    // user_name VARCHAR(30) NOT NULL,
    // comment VARCHAR(200) NOT NULL,
    // FOREIGN KEY(email_id) REFERENCES user(email_id)
    // )`,
    //     (err,results)=>{
    //         if(err){
    //             console.log(err);
    //         }else{
    //             console.log("TABLE ARE CREATED SUCCESFULLY")
    //         }connection.close()
    //     }
    // )
    // connection.query(
    //     `CREATE TABLE IF NOT EXISTS  payment(
    //         payment_id INTEGER(10) AUTO_INCREMENT PRIMARY KEY,
    //         product_id INTEGER(10) NOT NULL,
    //         email_id Varchar(50) NOT NULL,
    //         paid_amount	INTEGER(10)	NOT NULL,
    //         payment_mode VARCHAR(20) NOT NULL,
    //         card_name VARCHAR(30) NOT NULL,
    //         card_no	Integer(20)	NOT NULL,
    //         expiry_date	VARCHAR(20) NOT NULL,
    //         cvv_no VARCHAR(20) NOT NULL,
    //         payment_date VARCHAR(20) NOT NULL,
    //         FOREIGN KEY(email_id) REFERENCES user(email_id),
    //         FOREIGN KEY(product_id) REFERENCES product(product_id)
            
            
    //     )`,
    //     (err,results)=>{
    //         if(err){
    //             console.log(err);
    //         }else{
    //             console.log("TABLE ARE CREATED SUCCESFULLY")
    //         }connection.close()
    //     }
    // )
    connection.query(
        `CREATE TABLE IF NOT EXISTS orders(
       order_id INTEGER(10) AUTO_INCREMENT PRIMARY KEY,
        email_id VARCHAR(50) NOT NULL,
        product_id INTEGER(10) NOT NULL,
        product_qut INTEGER(10)	NOT NULL,
        Address	VARCHAR(30)	NOT NULL,
        date VARCHAR(20) NOT NULL,
        paid_amount INTEGER(10)	NOT NULL,
        product_qant INTEGER(10) NOT NULL,
        FOREIGN KEY(email_id) REFERENCES user(email_id),
        FOREIGN KEY(product_id) REFERENCES product(product_id)
        )`,
        (err,results)=>{
            if(err){
                console.log(err);
            }else{
                console.log("TABLE ARE CREATED SUCCESFULLY")
            }connection.close()
        }
    )
    // connection.query(
    //     `CREATE TABLE IF NOT EXISTS  admin(
    //         login_id	VARCHAR(50)	PRIMARY KEY,
    //         admin_name	VARCHAR(30)	NOT NULL,
    //         Password	VARCHAR(30) NOT NULL
            
    //     )`,
    //     (err,results)=>{
    //         if(err){
    //             console.log(err);
    //         }else{
    //             console.log("TABLE ARE CREATED SUCCESFULLY")
    //         }connection.close()
    //     }
    // )