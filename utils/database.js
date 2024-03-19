import mysql2 from "mysql2/promise";

export const connectToDatabase = async () => {
  // Create Connection to Database
  const connection = await mysql2.createConnection({
    host: "127.0.0.1",
    database: "todo",
    user: "root",
    password: "",
  });

  // Check connection
  await connection.connect((error) => {
    if (error) {
      console.error(error);
      return;
    }

    console.log("Connected to database!");
  });

  return connection
};
