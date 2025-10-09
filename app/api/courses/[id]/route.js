// GET one course by ID

import clientPromise from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// GET - get the on course by id
export async function GET(req, { params }) {
  const { id } = params;
  const client = await clientPromise;
  const db = client.db("nahdahDB");

  const course = await db
    .collection("courses")
    .findOne({ _id: new ObjectId(id) });

  if (!course)
    return NextResponse.json({ error: "Course not found" }, { status: 404 });

  return NextResponse.json(course);
}

// PATCH - update existing course

export async function PATCH(req, { params }) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid course ID" }, { status: 400 });
    }

    const body = await req.json();

    // ✅ Remove _id from body if it exists
    const { _id, ...filteredBody } = body;

    const client = await clientPromise;
    const db = client.db("nahdahDB");

    // Checking the course exists or not
    const course = await db
      .collection("courses")
      .findOne({ _id: new ObjectId(id) });

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    const updateFields = {
      ...filteredBody,
      updatedAt: new Date().toISOString(),
    };

    const result = await db
      .collection("courses")
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: updateFields },
        { returnDocument: "after" }
      );

    if (!result.matchedCount === 0) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "✅ Course updated successfully",
      updatedCourse: result,
    });
  } catch (error) {
    console.error("❌ Error updating course:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// DELETE = delete the course by id
export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    // Validate ID Format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid course ID" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("nahdahDB");

    // Checking the course exists or not
    const course = await db
      .collection("courses")
      .findOne({ _id: new ObjectId(id) });

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    // Delete the course
    const result = await db
      .collection("courses")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Failed to delete course" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: "Course deleted successfully",
      deletedCourse: course,
    });
  } catch (error) {
    console.error("❌ Error deleting course:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
