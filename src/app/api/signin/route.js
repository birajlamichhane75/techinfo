import mongoose from "mongoose";
import { connectstr1 } from "../../../../lib/db";
import { Userinfo } from "../../../../lib/model1/user";
import { NextResponse } from "next/server";

export async function POST(req){
    let payload = await req.json();

    await mongoose.connect(connectstr1);
    let res = await Userinfo(payload)
    res = await res.save();

    return NextResponse.json({res,success:true})
}

