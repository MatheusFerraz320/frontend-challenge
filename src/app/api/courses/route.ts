import { NextResponse } from "next/server";

const URL_CS = process.env.URL_CS;

export async function GET() {
  if (!URL_CS) {
    return NextResponse.json(
      { error: "URL_CS não configurada." },
      { status: 500 }
    );
  }

  const response = await fetch(`${URL_CS}/courses`, {
    headers: {
      Origin: "http://localhost:3024"
    },
    cache: "no-store"
  });

  const data = await response.json();

  return NextResponse.json(data, { status: response.status });
}
