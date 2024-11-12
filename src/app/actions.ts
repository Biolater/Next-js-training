"use server";

import { revalidatePath } from "next/cache";
import prisma from "./lib/db";

export async function addUser(formData: FormData) {
  const name = formData.get("name");
  const res = await fetch("https://672b26af976a834dd025d37e.mockapi.io/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name }),
  });
  const newUser = await res.json();
  revalidatePath("/mockapi-users");
  console.log("newUser", newUser);
}

export async function addPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const slug = content.split(" ").join("-");
  if (title && content) {
    try {
      await prisma.post.create({ data: { title, content, slug } });
    } catch (error) {
      throw new Error(
        error instanceof Error
          ? error.message
          : "An unknown error occurred while creating a post"
      );
    }
  }
  revalidatePath("/posts");
}
