const {Schema,Model} = require('mongoose')
const schema = new Schema({
    value:{
        type: String,
        required: true
    }
})

module.exports = model('Text',schema)