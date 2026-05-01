import { NextResponse } from "next/server";

const URL_CS = process.env.URL_CS;

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(_request: Request, { params }: Params) {
  if (!URL_CS) {
    return NextResponse.json(
      { error: "URL_CS não configurada." },
      { status: 500 }
    );
  }

  const { id } = await params;

  const response = await fetch(`${URL_CS}/courses/${id}`, {
    headers: {
      Origin: "http://localhost:3024",
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json(data, { status: response.status });
  }

  return NextResponse.json({ course: data.course ?? data });
}
