import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import {v2 as cloudinary} from 'cloudinary';


cloudinary.config({ 
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME, 
  api_key:process.env.CLOUDNARY_API_KEY, 
  api_secret: process.env.CLOUDNARY_API_SECRET 
});


const uploadOnCloudnary = async (localFilepath)=>{
    try {
        if(!localFilepath) return null
        // upload the file on cloudnary
        const response = await cloudinary.uploader.upload(localFilepath,{
            resource_type:auto
        })
        // file has been uploaded successfully 
        console.log("file is uploaded on cloudnary succcessully",
        response.url);

        return response;

    } catch (error) {
        fs.unlinkSync(localFilepath) //remove the locally store fileas the upload option got failed
        
    }
}

export {uploadOnCloudnary}

