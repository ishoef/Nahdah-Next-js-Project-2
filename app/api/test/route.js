// app/api/test/route.js
import clientPromise from "@/lib/dbConnect";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("nahdahDB");
    const collections = await db.listCollections().toArray();

    return new Response(JSON.stringify({ connected: true, collections }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
