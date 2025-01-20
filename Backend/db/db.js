const mongoose = require('mongoose')

function connectToDb(){
        mongoose.connect(process.env.DB_CONN_STRING

        ).then(()=>{
            console.log("Connected to Database");
            
        }).catch(err=>{
            console.log(err);
            
        })
}

module.exports =connectToDb