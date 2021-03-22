const {Router} = require('express')
const router = Router()

// api/auth
router.post('/register', async (req,res) => {
    try {
        const {email,password} = req.body

        
    } catch (e) {
        res.status(500).json({"message":"Something is wrong!"})
    }
})

router.post('/login', async (req,res) => {

})

module.exports = router

