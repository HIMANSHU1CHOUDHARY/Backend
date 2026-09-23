const config=require('../config/config');
const jwt=require('jsonwebtoken');

const generateToken=({userId})=>{
    const accessToken=jwt.sign({id:userId},config.ACCESS_TOKEN_SECRET,{expiresIn:'15m'});
    const refreshToken=jwt.sign({id:userId},config.REFRESH_TOKEN_SECRET,{expiresIn:'7d'});
    return {accessToken,refreshToken};
};

module.exports=generateToken;