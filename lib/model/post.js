import mongoose, { Schema } from "mongoose";

const details = new mongoose.Schema({
    title:String,
    post:String,
    field:String,
    img:String,
})

export const Post = mongoose.models.posts || mongoose.model("posts",details);