const jwt = require('jsonwebtoken');

exports.cookieJwtAuth = async (req, res, next) => {
    //get token from heddars Authorization
    const token = req.headers.authorization?.split(' ')[1];
    if(!token){
        
        return res.status(401).json({ message: 'Authorization token not found.' });
    }
    try{
        const user = jwt.verify(token, 'devhive');
        req.user = user;
        next();
    }catch(error){

        return res.status(401).json({ message: 'Authorization token invalid.' });
    }
};
    