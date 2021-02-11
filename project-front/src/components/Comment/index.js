

const Comment = ({ forum}) => {


  return (
    <div>
      <div>
        {forum.name}
      </div>
      <div>
        {forum.body}
      </div>
    </div>
  );
};

export default Comment;
