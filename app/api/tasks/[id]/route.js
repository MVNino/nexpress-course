import { connectToDatabase } from "@/utils/database";
import { Neonderthaw } from "next/font/google";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const connection = await connectToDatabase();

  const [results] = await connection.query("SELECT * FROM tasks WHERE id=?", [
    params.id,
  ]);

  if (!results[0]) {
    return NextResponse.json({ message: "Record not found!" }, { status: 404 });
  }

  return NextResponse.json({ data: results[0] });
};

export const PUT = async (request, { params, body }) => {
    try {
        const { name, description } = await request.json();
    
        const connection = await connectToDatabase();
    
        await connection.query(
          "UPDATE tasks SET name = ?, description = ? where id = ?",
          [name, description, params.id]
        );
    
        return NextResponse.json("Updated!");
    } catch (error) {
      throw error
    }
};

export const DELETE = async (request, { params }) => {
    const connection = await connectToDatabase()

    await connection.query('DELETE FROM tasks WHERE id = ?', [ params.id ])

    return NextResponse.json('Deleted!')
}
