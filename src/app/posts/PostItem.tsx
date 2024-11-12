"use client";
import Link from "next/link";
import React from "react";
import { removePost } from "../actions";

const PostItem: React.FC<{
  postSlug: string;
  postTitle: string;
  postContent: string;
  postId: string;
}> = ({ postSlug, postContent, postTitle, postId }) => {
  return (
    <div onDoubleClick={() => removePost(postId)}>
      <li className="bg-black text-white">
        <h2>{postTitle}</h2>
        <p>{postContent}</p>
      </li>
    </div>
  );
};

export default PostItem;
