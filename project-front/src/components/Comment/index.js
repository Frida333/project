

const Comment = ({ forum }) => {
  return (
    <div>
      <p>
        {forum.name}
        {forum.body}
      </p>
    </div>
  );
};

export default Comment;
