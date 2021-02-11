import axios from 'axios';
import React, {useState} from 'react';
import COMMENTS_QUERY from "../../queries/comments/comments";
import Forum from "../../components/Forum";
import Query from "../../components/Query";
import "./index.css";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const Form = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');

  function submitChanges(e){
    e.preventDefault()
    axios.post(`http://localhost:1337/Forums`, {
      name: name,
      body: comment,
      email: email,
      category: category
    })
    .then((data) =>{
      console.log(data)
      setEmail('')
      setName('')
      setComment('')
    })
    .catch((error) => {
      console.log('error')
    });
  }




  return (
    <div className="forum">
    <h1>FORUM</h1>
    <div className="bordercontainer">
    <div className="border">
    </div>
    </div>
    <div className="form">
      <form onSubmit={submitChanges}>
        <label className="name">Namn</label>
        <input

          className="input"
          value={name}
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label className="email">Email</label>
        <input

          className="input"
          value={email}
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>

        <Select

          aria-label={"category"}
          displayEmpty
          className="input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem  disabled value={'category'}>Kategori</MenuItem>
          <MenuItem value={"Miljötips"}>Miljötips</MenuItem>
          <MenuItem value={"Hållbarhetstips"}>Hållbarhetstips</MenuItem>
          <MenuItem value={"Städtips"}>Städtips</MenuItem>
          <MenuItem value={"Tvättips"}>Tvättips</MenuItem>

        </Select>
        </div>
        <label className="comment">Kommentar</label>
        <textarea
          required
          className="textarea"
          value={comment}
          name="body"
          onChange={(e) => setComment(e.target.value)}
        />

        <button className="button" type="submit">Sänd meddelande</button>
      </form>
      </div>
      <div className="comments">
        <Query query={COMMENTS_QUERY}>
          {({ data: { forums } }) => {
            return <Forum forums={forums} />;
          }}
        </Query>
      </div>
      <div className="aside">
      </div>
    </div>
  );
};

  export default Form;
