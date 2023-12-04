import { Router } from "express";
import { registerUser} from "../contollers/user.contollers.js";
// import {upload} from "../middlewares/multer.middleware.js"


const router = Router() 

router.post("/register",registerUser);


export default router