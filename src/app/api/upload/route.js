import { writeFile } from 'fs/promises';
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        let data = await req.formData();
        let file = data.get('file');

        if (!file) {
            return NextResponse.json({'message':'File Not found', 'success': false});
        }

        const byteData = await file.arrayBuffer();
        const buffer = Buffer.from(byteData);
        const path = `./public/${file.name}`;

        await writeFile(path, buffer);

        return NextResponse.json({"message": "Image uploaded", "success": true});
    } catch (error) {
        console.error('Error:', error);
    }
}