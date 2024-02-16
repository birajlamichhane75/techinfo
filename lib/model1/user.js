import mongoose, { Schema } from "mongoose";

const userdets = new mongoose.Schema({
    name:String,
    email:String,
})

export const Userinfo = mongoose.models.users || mongoose.model("users",userdets)
