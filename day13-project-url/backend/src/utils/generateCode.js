const generateCode=()=>{
    const mainString="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let  shortCode="";
    for(let j=0;j<6;j++){
        shortCode=shortCode+ mainString.charAt(Math.floor(Math.random() *62));
    }
    console.log(shortCode);
    return shortCode;
}
module.exports=generateCode;