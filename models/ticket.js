const mongoose = require('mongoose')
const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId

const ticketSchema = new Schema ({

  seat: {type: String, match: /[A-F][1-9]\d?/},

  price: {
    type:Number,
    minimum: 0,
  },
  
  flight: ObjectId
  })

  module.exports = mongoose.model('Ticket', ticketSchema)