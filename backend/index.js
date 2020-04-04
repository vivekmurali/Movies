const express = require('express');
const mongoose = require('mongoose');
const towatch = require('./models/towatch');
const watched = require('./models/watched');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_CONNECT,()=>{
    app.listen(PORT,()=>{
        console.log(`App listening on port ${PORT}`);
    });
    console.log(`Connected to DB `)
})



// app.post('/',(req, res) => {
//     const test = new towatch({
//         name: 'trial 2'
//     });
//     test.save();
//     res.redirect('/');
    
// })


app.get('/', (req,res)=>{
    towatch.find({},(err, data)=>{
        if(err) throw err;
        // console.log(data);
        res.send(data);
    })

});

app.get('/watched',(req,res)=>{
    watched.find({},(err, data)=>{
        if(err) throw err;
        res.send(data);
    })
})