const {Router} = require('express')
const {check,validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')
const router = Router()

// /api/auth
router.post(
    '/register',
    [
        check('email','Некорректный ввод').normalizeEmail().isEmail(),
        check('password',"Некорректный пароль").exists()
    ],
    async (req,res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            res.status(400).json({
                errors: errors.array(),
                message: 'Некорректный ввод'
            })
        }
        const {email,password} = req.body
        const user = await User.findOne({email})

        if(user) {
            return res.status(400).json({message:'Такой пользователь существует'})
        }

        const hashedPassword = await bcrypt.hash(password)
        const newUser = new User({email,password: hashedPassword})

        await newUser.save()

        res.status(201).json({message: 'Пользователь создан'})
    } catch (e) {
        res.status(500).json({"message":"Something is wrong!"})
    }
})

router.post(
    '/login',
    [
        check('email','Некорректный ввод').isEmail(),
        check('password',"Некорректный пароль").isLength({min:8})
    ],
    async (req,res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            res.status(400).json({
                errors: errors.array(),
                message: 'Некорректный ввод'
            })
        }
        const {email,password} = req.body

        const user = await User.findOne({email})

        if(!user) {
            return res.status(400).json('Такого пользователя нет')
        }
        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch) {
            return res.status(400).json({message: 'Неверный пароль'})
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('JWTSecret'),
            { expiresIn: '1h' }
        )

        res.json({token,userId: user.id})

    } catch (e) {
        res.status(500).json({"message":"Something is wrong!"})
    }
})

module.exports = router

