// app/api/auth/register/route.js
import clientPromise from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password, name } = await req.json();
    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    const client = await clientPromise;
    const db = client.db();
    const users = db.collection("users");

    const existing = await users.findOne({
      email: String(email).toLowerCase(),
    });
    if (existing) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 409,
      });
    }

    const hashed = await bcrypt.hash(password, 10);

    const res = await users.insertOne({
      name: name ?? null,
      email: String(email).toLowerCase(),
      password: hashed, // store hashed password
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ ok: true, id: res.insertedId }), {
      status: 201,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
