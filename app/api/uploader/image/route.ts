import cloudinary from '@/lib/cloudinary';
import { NextResponse } from 'next/server';
import { Buffer } from 'buffer';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      console.error('No file found in the request');
      return NextResponse.json(
        { error: 'No file found in the request' },
        { status: 400 }
      );
    }

    // Validate file type
    const validMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'video/mp4',
      'video/webm',
    ];
    if (!validMimeTypes.includes(file.type)) {
      console.error('Invalid file type:', file.type);
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }

    const fileBuffer = await file.arrayBuffer();
    const mimeType = file.type;
    const encoding = 'base64';
    const base64Data = Buffer.from(fileBuffer).toString('base64');
    const fileUri = `data:${mimeType};${encoding},${base64Data}`;

    const isVideo = file.type.startsWith('video/');

    const uploadResponse = await cloudinary.uploader.upload(fileUri, {
      upload_preset: 'k7tjnpmw',
      folder: 'content-studio',
      unique_filename: true,
      resource_type: isVideo ? 'video' : 'image',
    });

    return NextResponse.json(
      { url: uploadResponse.secure_url },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error during media upload:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
