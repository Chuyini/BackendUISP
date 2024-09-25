const express = require("express");
const app  = express();


app.get("/", 
    
    function(req, res){

        console.log("ya se pudo\n");
        console.log(res);
    }
    
    
);