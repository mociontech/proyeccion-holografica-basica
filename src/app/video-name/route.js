import { NextResponse } from "next/server";
import path from "path";
import { writeFile, appendFile, readFile } from "fs/promises";

export async function POST(request) {
  try {
    const body = await request.json();

    await writeFile(
      path.join(process.cwd(), "public/" + "video.txt"),
      body.name
    );
  } catch (error) {
    console.log(error.message);
  }
  return NextResponse.json({
    Message: "Success",
    status: 201,
  });
}

export async function GET(request) {
  let data = "";
  try {
    data = await readFile(
      path.join(process.cwd(), "public/" + "video.txt"),
      "utf-8"
    );
  } catch (error) {
    console.log(error, "error reading ");
  }
  return new Response(data);
}
