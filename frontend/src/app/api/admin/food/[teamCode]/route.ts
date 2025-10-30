import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import FoodLog from '@/models/FoodLog'; // Your FoodLog model

export async function GET(
  request: Request,
  context: { params: Promise<{ teamCode: string }> }
) {
  try {
    const params = await context.params;
    const { teamCode } = params;

    if (!teamCode) {
      return NextResponse.json(
        { message: 'Team code is required' },
        { status: 400 }
      );
    }

    await dbConnect();

    // Find all documents in the 'food1' collection with the matching teamId
    // Use .lean() to get plain JavaScript objects instead of Mongoose documents
    const members = await FoodLog.find({ teamId: teamCode }).lean();

    if (!members || members.length === 0) {
      return NextResponse.json(
        { message: 'No members found for this team code' },
        { status: 404 }
      );
    }

    // --- THIS IS THE CRITICAL CHANGE ---
    // Manually map the results to ensure the _id is included as a string
    const membersData = members.map((member) => ({
      ...member,
      _id: member._id.toString(), // Convert the MongoDB ObjectId to a string
    }));
    // --- END CHANGE ---

    return NextResponse.json(membersData, { status: 200 });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: error.message },
      { status: 500 }
    );
  }
}