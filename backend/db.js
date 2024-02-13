const mongoose = require("mongoose");
const url = 'mongodb+srv://user:876297@cluster0.tpeosqe.mongodb.net/gofoodmern?retryWrites=true&w=majority';
const mongodb = async () => {
    await mongoose.connect(url, { useNewUrlParser: true }, async (err, res) => {
        if (err) console.log(err);
        else {
            console.log('CONNECTED SECCESSFULLY');
            const fetched_data = await mongoose.connection.db.collection('sample');
            fetched_data.find({}).toArray(async function(e, data){
                const foodcategory = await mongoose.connection.db.collection('foodCategory');
                foodcategory.find({}).toArray( function(err, catdata){
                    if (err) console.log(err);
                    else {
                       global.f=data;
                    //    global.foodcategory=catdata;
                    }
                })




            })
        }
    })
}
module.exports = mongodb;

// .then(async(err,res)=>{
//     console.log("CONNECTED SUCCESSFULLY");
//     const fetched_data=await mongoose.connection.db.collection("sample");
//     fetched_data.find({}).toArray(function(err,data){
//         if(err) console.log(err);
//          else console.log(data);
//     })
//    }).catch((err)=>{
//     console.log(err);
//    })