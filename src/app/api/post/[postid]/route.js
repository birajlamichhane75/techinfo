import mongoose from "mongoose";
import { connectstr } from "../../../../../lib/db";
import { Post } from "../../../../../lib/model/post";
import { NextResponse } from "next/server";

export async function GET(req,{params}){
    let uid = {_id:params.postid}

    await mongoose.connect(connectstr);
    let data = await Post.findById(uid);
    return NextResponse.json({data,success:true})
}

export async function PUT(req,{params}){
    let payload = await req.json();

    const uid = {_id:params.postid}

    await mongoose.connect(connectstr);
    let result = await Post.findByIdAndUpdate(uid,payload)
    return NextResponse.json({result,success:true})
}

export async function DELETE(req,{params}){
    let uid = {_id:params.postid}

    await mongoose.connect(connectstr);
    let res = await Post.deleteOne(uid)
    
    return NextResponse.json({success:true})
}