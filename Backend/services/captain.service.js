const captianModel = require('../models/captain.model')


module.exports.createCaptain= async ({
    firstName, lastName,email,password,
    color,plate,capacity,vehicleType
})=>{
    if(!firstName || !email || !password || !color || !plate || !vehicleType){
        throw new Error('All fields are required')
    }

    const captain =  captianModel.create({
        fullName:{
            firstName,
            lastName
        },
        email, 
        password,
        vehicle:{
            color,
            plate,
            capacity,   
            vehicleType 
        }
    })

    return captain
}
