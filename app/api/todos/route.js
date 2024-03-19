import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/database";

export async function GET(request) {
  const connection = await connectToDatabase();

  const [results] = await connection.query("SELECT * FROM tasks");

  return NextResponse.json(results);
}
