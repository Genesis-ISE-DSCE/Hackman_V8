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

    const members = await FoodLog.find({ teamId: teamCode }).lean();

    if (!members || members.length === 0) {
      return NextResponse.json(
        { message: 'No members found for this team code' },
        { status: 404 }
      );
    }

    const membersData = members.map((member) => ({
      ...member,
      _id: member._id.toString(),
    }));

    return NextResponse.json(membersData, { status: 200 });
  } catch (error: unknown) { // <-- Fix 3: Use unknown
    let message = 'Internal server error';
    if (error instanceof Error) {
      message = error.message;
    }
    console.error('API Error:', error);
    return NextResponse.json(
      { message, error: String(error) },
      { status: 500 }
    );
  }
}