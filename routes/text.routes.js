const {Router} = require('express')
const {check,validationResult} = require('express-validator')
const Text = require('../models/Text')
const auth = require('../middleware/auth.middleware')

const router = Router()

// api/text
router.post(
    '/create',
    auth,
    async (req,res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors:errors.array(),
                message: 'Некорректный ввод'
            })
        }
        const {value} = req.body

        const newText = new Text({
            value,owner: req.user.userId
        })

        await newText.save()

        res.status(201).json({text:newText ,message: 'Text is created'})
    } catch (e) {
        res.status(500).json({message :"Something is wrong!"})
    }

    })
router.get(
    '',
    auth,
    async (req,res) => {
    try {
        const texts = await Text.find({owner: req.user.userId})
        res.json(texts)
    } catch (e) {
        res.status(500).json({message :"Something is wrong!"})
    }
    })
module.exports = router