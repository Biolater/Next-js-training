"use server";

import { revalidatePath } from "next/cache";

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
