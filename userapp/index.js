let express= require('express');

let app=express();
let router = express.Router();
let usersRepo = require('./repos/usersRepo');


app.use(express.json());
app.use('/api/',router);


router.get('/',function(req,res,next){

    usersRepo.get(function(data){
        res.status(200).json({

            "status":200,
            "statusText":"ok",
            "message":"Users data fetched successfully",
            "data":data
            
            });

    },function(err){  

        next(err);



    });

    



});
router.get('/:id',function(req,res,next){
let id=req.params.id
    usersRepo.getById(id,function(data){
        res.status(200).json({

            "status":200,
            "statusText":"ok",
            "message":"Users data fetched successfully",
            "data":data
            
            });

    },function(err){  

        next(err);



    });

    



});
//Createuser
router.post('/:id',function(req,res,next){
        usersRepo.insert(req.body,function(data){
            res.status(200).json({
    
                "status":201,
                "statusText":"Create",
                "message":"Users created",
                "data":data
                
                });
    
        },function(err){  
    
            next(err);
    
    
    
        });
    
    });



//update user
router.put('/:id',function(req,res,next){
    usersRepo.update(req.params.id,req.body,function(data){
        res.status(200).json({

            "status":200,
            "statusText":"Update",
            "message":"Users Updated",
            "data":data
            
            });

    },function(err){  

        res.status(404).json({

            "status":404,
            "statusText":err.message,
            "error":err.message,
            "data":err
            
            });


    });

});

//delete user
router.delete('/:id',function(req,res,next){
    usersRepo.delete(req.params.id,function(data){
        res.status(200).json({

            "status":200,
            "statusText":"User deleted",
            "message":"user with id"+req.params.id+"Deleted",
            
            });

    },function(err){  

        res.status(404).json({

            "status":404,
            "statusText":err.message,
            "error":err.message,
            "data":err
            
            });


    });

});






app.listen(4000,function(){

console.log("app running on http://localhost:4000")


})