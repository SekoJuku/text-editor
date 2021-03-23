const jwt = require("jsonwebtoken")
const config = require('config')

module.exports = (req,res,next) => {
    if(req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        console.log(req.headers.authorization)
        if(!token) {
            return res.status(401).json({message: 'You didn\'t authorize'})
        }

        const decodedToken = jwt.verify(token, config.get('JWTSecret'))
        req.user = decodedToken
        next()

    } catch (e) {
        return res.status(401).json({message: 'Catch You didn\'t authorize'})
    }
}