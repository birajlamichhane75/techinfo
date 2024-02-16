import mongoose from "mongoose";
import { connectstr } from "../../../../lib/db";
import { Post } from "../../../../lib/model/post";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectstr)

    let data = await Post.find();
    return NextResponse.json({data,success:true})
}


export async function POST(req){
    let payload = await req.json();

    await mongoose.connect(connectstr)

    let data = new Post(payload)
    let result = await data.save();

    return NextResponse.json({result,success:true})


}