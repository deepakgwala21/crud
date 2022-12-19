const mongoose = require('mongoose')
const schema = mongoose.Schema;

const userSchema = new schema({
name:{
    type: String,
    required: true
},
rollno:{
    type: Number,
    required: true

},
age:{
    type: Number
}
})

const userModel = mongoose.model('userData', userSchema)
module.exports = userModel;