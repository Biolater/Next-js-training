import prisma from "@/app/lib/db";
import { addPost } from "../actions";
import Link from "next/link";
import PostItem from "./PostItem";

const Posts = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    select: {
      title: true,
      id: true,
      content: true,
      slug: true,
    },
  });
  return (
    <div className="w-full h-svh flex flex-col items-center gap-4">
      <h1 className="text-3xl">Posts</h1>
      <form action={addPost} className="flex items-center gap-1">
        <input name="title" type="text" placeholder="title" />
        <input name="content" type="text" placeholder="content" />
        <button type="submit">Add</button>
      </form>
      <ul className="flex flex-col gap-2">
        {posts.map((post) => (
          <PostItem
            key={post.id}
            postId={post.id}
            postContent={post.content}
            postSlug={post.slug}
            postTitle={post.title}
          />
        ))}
      </ul>
    </div>
  );
};

export default Posts;
