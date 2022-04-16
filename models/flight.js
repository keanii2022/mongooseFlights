        const mongoose = require('mongoose')
        const Schema = mongoose.Schema

        const destinationSchema = new Schema ({
        airport: {
        type: String,
        enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'	],
      },
      arrival: Date,
      })

        const flightSchema = new Schema ({
        airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required:true
        },
        airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        required:true,
        default: 'DEN'
        },
        flightNo: {
        type: Number,
        minlength:10,
        maxlength:9999,
        required:true,
        },
        departs: {
            type: Date,
            // default: 
        },
        destinations:[destinationSchema],
        })




        module.exports = mongoose.model('Flight', flightSchema)