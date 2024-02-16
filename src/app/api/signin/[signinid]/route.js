import mongoose, { connect } from "mongoose";
import { connectstr1 } from "../../../../../lib/db";
import { Userinfo } from "../../../../../lib/model1/user";
import { NextResponse } from "next/server";

export async function GET(req,{params}){
    let uid = {_id:params.id};

    await mongoose.connect(connectstr1);
    let res = await Userinfo.findById(uid);

    return NextResponse.json({res,success:true})
}