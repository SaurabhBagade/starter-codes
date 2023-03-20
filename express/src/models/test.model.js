const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
   name:{
    type:String
   }
}, {
    timestamps: true
});


const jobvibesDB = mongoose.connection.useDb('test')


module.exports = jobvibesDB.model('test', testSchema);

