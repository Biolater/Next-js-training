import prisma from "@/app/lib/db";
import { addPost } from "../actions";
import Link from "next/link";

const Posts = async () => {
  const posts = await prisma.post.findMany();
  return (
    <div className="w-full h-svh flex flex-col items-center gap-4">
      <h1 className="text-3xl">Posts</h1>
      <form action={addPost} className="flex items-center gap-1">
        <input name="title" type="text" placeholder="title" />
        <input name="content" type="text" placeholder="content" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {posts.map((post) => (
          <Link key={post.id} href={`/posts/${post.slug}`}>
            <li>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
