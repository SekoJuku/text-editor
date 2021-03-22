const {Schema,model,Types} = require('mongoose')

module.exports = model('User', new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    texts: [{type: Types.ObjectId,ref:'Text'}]
}))