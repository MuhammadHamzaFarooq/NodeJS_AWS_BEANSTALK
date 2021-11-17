const express = require('express');
const app = express();


app.get('/' , (req,res)=>{
    res.send('Welcome to aws Node js Muhammad Hamza Farooq roll 26 !!!!!!!!!!!!');
})


app.listen(process.env.PORT || 5000 , ()=>{
    console.log("Server is up on running 5000");
});


module.exports = app;