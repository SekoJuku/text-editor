const {Router} = require('express')
const {check,validationResult} = require('express-validator')
const router = Router()

// api/text
router.post(
    '/create',
    [
        check('value').exists()
    ],
    async (req,res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors:errors.array(),
                message: 'Некорректный ввод'
            })
        }
        const {value} = req.body

    }
)
router.post(
    '/edit?{textId}'
)