import { Promise } from "mongoose"

const asyncHandler= (requestHandler)=>{
    (re,res,next)=>{
        Promise.resole(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}

export {asyncHandler }





// const asyncHandler = (fn) =>async(req,res,next)=>{
//     try {
//         await fn(req,res,next);
//     } catch (error) {
//         res.status(error.code || 500).jso({
//             success :false,
//             message:error.message
//         })
        
//     }
// } 