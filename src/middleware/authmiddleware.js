
import jwt from 'jsonwebtoken' ;
function auth (req,res,next){
    const token=req.header('x-auth-token');
    if(!token) return res.status(400).send('access denied no token found');
    
    try{
        const user_verfication= jwt.verify(token,'scretkey');
        req.user_token= user_verfication;
        next();

    }catch(error){
        res.status(400).send('invalid token');
    }
}

export {auth};
