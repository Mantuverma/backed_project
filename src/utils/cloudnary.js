import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: 'chaibackend',
  api_key: '713394255198363',
  api_secret: 'sflSxLbtpqlfifdl2kJq3dGCwdg'
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file on Cloudinary
    console.log("Local path is coming till here", localFilePath);
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "image"
    })

    // File has been uploaded successfully
    console.log("File is uploaded on Cloudinary", response);

    // Remove the locally saved temporary file
    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    // Remove the locally saved temporary file as the upload operation failed
    fs.unlinkSync(localFilePath);
    return null;
  }
}

export { uploadOnCloudinary };
