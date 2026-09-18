const jwt=require('jsonwebtoken');
const config=require('../config/config');
const createAccessToken=({userId,role})=>{
    const accessToken=jwt.sign({userId,role},config.ACCESS_TOKEN_SECRET,{expiresIn:'15m'});
    return accessToken;
}
const createRefreshToken=({userId,role})=>{
    const refreshToken=jwt.sign({userId,role},config.REFRESH_TOKEN_SECRET,{expiresIn:'7d'});
    return refreshToken;
}
module.exports={createAccessToken,createRefreshToken}