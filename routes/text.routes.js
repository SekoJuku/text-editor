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
        console.log(req.error)
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
router.put(
    '/edit/:id',
    auth,
    async (req,res) => {
        try {
            await Text.updateOne({_id:req.params.id},{value:req.body.value})
            res.status(204).json(`Text is updated. ID: ${req.params.id}`)
        } catch (e) { }
    }
)
router.delete(
    '/delete/:id',
    auth,
    async (req,res) => {
    try {
        await Text.deleteOne({_id:req.params.id})
        res.status(204).json({message: 'Delete completed'})
    } catch (e) { }
    }
)
module.exports = router