mongoose =require('mongoose');


const User = mongoose.model('User',{
  mail:{
    type: String,
    min: 1,
    required: true,
    trim:true
  }
});

module.exports={User};
