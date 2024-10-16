import jwt from "jsonwebtoken";


const authMIddleware = async (req,res,next) =>{

    const {token} = req.headers;
    if (!token) {
        return res.json({success:false, message:"not AUthorised login again"})
        
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRETE)
        req.body.userId = token_decode.id;
        next();
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
        
    }

}
export default authMIddleware;