import userModel from "../models/userModel.js"

export const loginUser=async(req,res)=>{
    const {email,password}=req.body
    
    try {
        console.log('userController req.body',req.body);
        const user=await userModel.findOne({email})
        console.log('userController user',user);
        if(!user){return res.send({success:false,message:'User not exist'})}
        return res.json({success:true,message:'Login Success'})
    } catch (error) {
        console.log('userController error',error);
        res.json({success:false,message:'Error'})
    }
}