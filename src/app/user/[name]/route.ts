import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  const name = params.name;
  return new Response(JSON.stringify({ name }));
}
