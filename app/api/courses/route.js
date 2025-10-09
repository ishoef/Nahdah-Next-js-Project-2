import clientPromise from "@/lib/dbConnect";
import { NextResponse } from "next/server";

// Fetch All courses
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("nahdahDB");
    const courses = await db
      .collection("courses")
      .find()
      .sort({ _id: -1 })
      .toArray();
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Post Add a new course
export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("nahdahDB");

    const body = await req.json();
    const result = await db.collection("courses").insertOne({
      title: body.title,
      level: body.level || "Beginner",
      category: body.category || "Arabic Grammar",
      instructor: body.instructor || "Ad-Dirasah Academy",
      price: body.price || 0,
      duration: body.duration || "2h 30m",
      rating: body.rating || 5,
      createdBy: body.creator || "Ismail Nayef",
      createdDate: new Date().toLocaleDateString(),
      createdTime: new Date().toLocaleTimeString(),
    });

    return NextResponse.json(
      { message: "Course added successfully", courseId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
