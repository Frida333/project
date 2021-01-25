import axios from 'axios';
import React, {useState} from 'react';
import COMMENTS_QUERY from "../../queries/comments/comments";
import Forum from "../../components/Forum";
import Query from "../../components/Query";


const Form = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');


  function submitChanges(e){
    e.preventDefault()
    axios.post(`http://localhost:1337/Forums`, {
      name: name,
      body: comment,
    })
    .then((data) =>{
      console.log(data)
      console.log('sucess')
      setName("")
      setComment("")
    })
    .catch((error) => {
      console.log('error')
    });
  }

  return (
    <div >
      <form onSubmit={submitChanges}>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={comment}
          name="body"
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Sänd meddelande</button>
      </form>
      <div className="forum">
        <Query query={COMMENTS_QUERY}>
          {({ data: { forums } }) => {
            return <Forum forums={forums} />;
          }}
        </Query>
      </div>
    </div>
  );
};

  export default Form;
