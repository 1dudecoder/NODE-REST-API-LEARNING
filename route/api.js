const express = require("express");
const Nitin = require("../models/nitincol");
//if you are putting your routes to diffrent folder then use router from express
const router = express.Router();

// //routes //middle wares
// //also run on server side and we can send data throw it
// router.get('/home',function(req,res){
//     console.log("this is get request")
//     res.send("hellow world");
//     // res.send({name:"nitin"});    //1 time sirf 1 request can be send
// })

//get a list of ninjas from the mongo db
router.get('/nitin',function(req,res,next){
    res.send({type:'Get'})
})

//add a new data to mongo db
router.post('/nitin',function(req,res,next){

    //getting collection from aur model  but it save data in database but not save it locally instant of this use are going to use create method which create instance of data and store it locally also.
    // var nitin = new Nitin(req.body);
    // nitin.save();

Nitin.create(req.body).then(function(nitin){
    res.send(nitin);  //here we are responcing back that data is store or not
}).catch(next)  //it take some time so it return us a promise

    // res.send(
    //     {
    //      type:'Post',
    //      name: req.body.name,
    //      message:req.body.message
    //     }
    // )
})



//update a nitin in the db
router.put('/nitin/:id',function(req,res,next){
    Nitin.findByIdAndUpdate({_id: req.params.id},req.body).then(function(){
        Nitin.findOne({_id: req.params.id}).then(function(data){
            res.send(data);
        })
    });
    // res.send({type:'Put'})
})



//delete a nitin from the db
router.delete('/nitin/:id',function(req,res){
    // console.log(req.params.id);
    Nitin.findByIdAndRemove({_id: req.params.id}).then(function(data){
        res.send(data);
    })
    // res.send({type:'Delete'})
})

module.exports = router;