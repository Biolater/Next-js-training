const Note: React.FC<{ params: { noteslug: string } }> = ({ params }) => {
  return <div>{params.noteslug}</div>;
};
export default Note;
