import jwt from "jsonwebtoken"


export const userAuth = async(req, res, next)=>{
    const {token} = req.headers;

    if(!token){
        return res.json({success: false, message: "Not Authorized, Login Again"})
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_Secret);
        if(tokenDecode.id){   // because the token ki created from user id and jwt secret
            req.body.userId_ = tokenDecode.id  
        }else{
            return res.json({success: false, message: "Not Authorized, Login Again"})
        }
        next()
    } catch (error) {
        return res.json({success: false, message: error.message})

        
    }
}