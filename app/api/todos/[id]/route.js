import { connectToDatabase } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const connection = await connectToDatabase();

  const [results] = await connection.query("SELECT * FROM tasks WHERE id=?", [
    params.id,
  ]);

  if (!results[0]) {
    return NextResponse.json({ message: "Record not found!" }, { status: 404 });
  }

  return NextResponse.json(results[0]);
};

export const PUT = async (request, { params }) => {
  try {
    const { name } = request.body();

    const connection = await connectToDatabase();

    await connection.query(
      "UPDATE tasks SET name = ? where id = ?",
      [name, params.id]
    );

    return NextResponse.json("Updated!");
  } catch (error) {
    console.error(error);
  }
};
