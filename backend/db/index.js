const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://prashob7733:prashob7733@cluster0.p39dpm6.mongodb.net/')
.then(()=>
{
    console.log('Connected to MongoDB');

})
.catch((err) =>
{
    console.log(err);
})