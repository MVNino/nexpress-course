import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/database";

export const GET = async (request) => {
  const connection = await connectToDatabase();

  const [results] = await connection.query("SELECT * FROM tasks");

  return NextResponse.json(results);
};

export const POST = async (request) => {
  try {
    const { name, description } = await request.json();

    const connection = await connectToDatabase();

    await connection.query(
      "INSERT INTO tasks (name, description) VALUES (?, ?)",
      [name, description]
    );

    return NextResponse.json("Created!");
  } catch (error) {
    return NextResponse.error(error);
  }
};
