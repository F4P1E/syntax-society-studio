// app/resource-library/api/upload/route.ts
import { NextResponse } from 'next/server';
// Make sure the following file exists: /lib/sanity.server.ts and exports 'client'
import { client } from '@/sanity/lib/client'; // configure this separately
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'; // adjust to your project

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { title, description, category, downloadUrl, tags } = body;

  try {
    const doc = {
      _type: 'resource',
      title,
      description,
      category,
      downloadUrl,
      tags,
      uploadedBy: {
        _type: 'reference',
        _ref: session.user.email || '', // Use email as a unique identifier if id is not present
      },
      uploadDate: new Date().toISOString(),
    };

    const result = await client.create(doc);
    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to upload' }, { status: 500 });
  }
}
