const express = require('express');
const router = express.Router();

router.post('/fooddata',(req,res)=>{
    try{
        console.log(global.food_items);
        res.send([global.f]);
    }
    catch(error){
        console.error(error.message);
        res.send("server error");
    }
})
module.exports = router;