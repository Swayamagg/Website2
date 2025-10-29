const Imagekit=require('imagekit');

const imagekit=new Imagekit({
    publicKey:process.env.IMAGE_PUBLICKEY,
    privateKey:process.env.IMAGE_PRIVATEKEY,
    urlEndpoint:process.env.IMAGE_URL,
})
async function uploadFile(file,filename) {
    const result=await imagekit.upload({
         file:file,
         fileName:filename,
    })
    return result;
}

module.exports={uploadFile};