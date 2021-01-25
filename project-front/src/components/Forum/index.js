import Comment from "../Comment";



const Forum = ({ forums}) => {
  return (
    <div >
      {forums.map((forum, i) => {
          return <Comment forum={forum} key={`forum__${forum.id}`}  />;
      })}
    </div>
  );
};

export default Forum;
