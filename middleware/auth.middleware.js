const jwt = require("jsonwebtoken")
const config = require('config')

const middleware = (req, res, next) => {

    if (req.method === 'OPTIONS') {
        return next()
    }
    try {

        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: 'You didn\'t authorize'})
        }
        const decodedToken = jwt.verify(token, config.get('JWTSecret'), (err) => {
            if(err) {
                console.log(err.message)
                return err.message
            }
            else {
                return token
            }
        })
        if(decodedToken === 'jwt expired') {
            req.error = 'jwt expired'
        }
        req.user = decodedToken
        next()
    } catch (e) {
        return res.status(401).json({message: 'Catch: You didn\'t authorize'})
    }
}


module.exports = middleware