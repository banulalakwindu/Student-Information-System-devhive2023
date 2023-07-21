const jwt = require('jsonwebtoken');

exports.cookieJwtAuth = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        
        return res.status(401).json({ message: 'Authorization token not found.' });
    }
    try{
        const user = jwt.verify(token, 'devhive');
        req.user = user;
        next();
    }catch(error){
        res.clearCookie('token');
        return res.status(401).json({ message: 'Authorization token invalid.' });
    }
};
    