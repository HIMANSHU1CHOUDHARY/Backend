const Imagekit=require('imagekit');
console.log("PUBLIC KEY:", process.env.IMAGEKIT_PUBLIC_KEY);
console.log("URL:", process.env.IMAGEKIT_URL_ENDPOINT);
const storageInstance=new Imagekit(
    {
      urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
       });


const sendfiles=async(file,fileName)=>{
    const obj={
        file:file,
        fileName:fileName,
        folder:'cohort3-public'
    }
    return await storageInstance.upload(obj);
}
module.exports=sendfiles;