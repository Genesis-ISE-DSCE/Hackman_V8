import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import FoodLog from '@/models/FoodLog'; // Your FoodLog model

export async function POST(request: Request) {
  try {
    // We now expect teamId and name instead of docId
    const { teamId, name, field, status } = await request.json();

    if (!teamId || !name || !field || typeof status !== 'boolean') {
      return NextResponse.json(
        { message: 'Missing required fields: teamId, name, field, status' },
        { status: 400 }
      );
    }

    await dbConnect();

    // Find the document using teamId and name, then update it
    const result = await FoodLog.updateOne(
      { teamId: teamId, name: name }, // Find by teamId and name
      { [field]: status } // Set the new status
    );

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: 'Member not found with that name and team ID' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Status updated successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 }
    );
  }
}