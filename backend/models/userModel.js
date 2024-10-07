const mongoose = require("mongoose");

// Schema of User with types
const userSchema = mongoose.Schema(
  {
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    mobile: Number,
  },
  {
    versionKey: false,
  }
);

// users Model With Collect name - users
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;





// //It has schema of signup page to send data on database
// const mongoose=require("mongoose");
// //schema of user with types
// const userSchema=mongoose.Schema(
// {
//         name:{
//         required:true,
//         type:String,
//         // unique:false,
//         },
    
//         email: {
//       required: true,
//       type: String,
//       unique: true,
//     },
//    password: {
//       required: true,
//       type: String,
//     },
// },

// {
//     versionkey:false,
// }



// );
// // Users Model with collection name - 'users'
// const UserModel = mongoose.model('user', userSchema);

// module.exports = UserModel;