import prisma from "@/app/lib/db";

const PostPage: React.FC<{ params: { slug: string } }> = async ({ params }) => {
  const { slug } = params;
  const postInformation = await prisma.post.findUnique({ where: { slug } });
  return (
    <div>
      <h2>{postInformation?.title}</h2>
      <p>{postInformation?.content}</p>
    </div>
  );
};

export default PostPage;
