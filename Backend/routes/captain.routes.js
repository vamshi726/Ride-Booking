const express=require('express')
const { body } = require('express-validator')
const captainController = require('../controllers/captain.controller')
const router = express.Router()


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min:3}).withMessage('First name must be at least 3 character long '),
    body('password').isLength({min:5}).withMessage('Password name must be at least 5 character long '),

    body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 character long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be at least 3 character long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type')
],

captainController.registerCaptain

)
module.exports=router   