import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
    facultyId:{type:Number,required:true,unique:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,enum:['Admin','HOD','Staff'],default:'Staff',required:true}
});
const faculty=mongoose.model('faculty',facultySchema,'faculty')

export default faculty