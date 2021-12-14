const mongoose = require("mongoose")


const placeSchema = new mongoose.Schema({


    heading1: {type:String, required: true},
    main_image_url: {type: String , required: true},
    image2_url: {type: String , required: true},
    image3_url: {type: String , required: true},
    image4_url: {type: String , required: true},
    heading2: {type: String, required: true},

    cabin_heading: {type: String, required: true},
    area: {type: String, required: true},

    bedroom_heading: {type: String, required: true},
    no_of_beds: {type: String, required: true},

    bathroom_heading: {type:String, required: true},
    no_of_bathrooms: {type: String, required: true},

    spaces_heading: {type: String, required: true},
    spaces:{type: String, required: true},

    heading_description: {type: String, required: true},
    description: {type: String, required: true},

    price: {type: String, required: true},
    ratings: {type: Number, required: true},

    no_of_reviews: {type: String, required: true},

},
{
    versionKey: false,
    timestamps: true


})

const Place = mongoose.model("place", placeSchema)

module.exports = Place

