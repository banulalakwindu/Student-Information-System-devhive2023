const {validationResult} = require("express-validator");

module.exports = (validation)=>async (req,res,next)=>{
    await Promise.all(validation.map(validation=>validation.run(req)));
    
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }
    const resErr = [];
    errors.array().map((err) => resErr.push(err.msg));
    return res.status(400).json({message:"validation failed",errors:resErr});
};