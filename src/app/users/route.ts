import { NextRequest } from "next/server";

const users = [{ name: "John" }, { name: "Jane" }, { name: "Bob" }];

export async function GET() {
  return new Response(JSON.stringify(users));
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  users.push({ name: body.name });
  return new Response(JSON.stringify(users), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
