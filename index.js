var Express =require('express') 
var mongoose = require("mongoose")
const bodyParser= require("body-parser");
var {pupilModel}= require('./model/student')

var appl= Express();


appl.use(bodyParser.json());
appl.use(bodyParser.urlencoded({extended:true}))



appl.post('/findall', async(req,res)=>{

    try
    {
        var data= req.body;
        res.json(data)

       
        var result = await pupilModel.find().exec();
      res.json(result);

    }
    catch(error){res.status(500).send(error)

    }
})



appl.get ('/viewall', async(req, res)=>{

    try
    {  
        var data= req.body;
        res.json(data)
        var result= await pupilModel.find().exec() ;
        res.json(result);
    }
    catch(error){res.status(500).send(error);

    }
})

appl.post("/search", async(req, res)=>{
    try
    {
       pupilModel.find(req.body, (error, data)=>{
           
           if(error){throw error}

           else{ res.json(data)}
       })
    }
    catch(error){res.status(500).send(error)}
})


appl.listen(process.env.PORT || 3000,function(){
    console.log("Your Node Server is fine");
})