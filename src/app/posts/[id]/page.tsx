import prisma from "@/app/lib/db";

const PostPage: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = params;
  const postInformation = await prisma.post.findUnique({ where: { id } });
  return (
    <div>
      <h2>{postInformation?.title}</h2>
      <p>{postInformation?.content}</p>
    </div>
  );
};

export default PostPage;
