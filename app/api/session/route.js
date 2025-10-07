import { auth } from "@/auth";

export async function GET() {
  try {
    const session = await auth(); // Get the current NextAuth session
    return Response.json(session || null);
  } catch (error) {
    console.error("Error fetching session:", error);
    return Response.json({ error: "Failed to get session" }, { status: 500 });
  }
}
