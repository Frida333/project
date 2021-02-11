import Comment from "../Comment";
import React, {useState} from 'react';
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";




const Forum = ({ forums}) => {
  const [categoryComment, setCategoryComment] = useState('');




  return (
    <div>
      <Select
        aria-label={"category"}
        displayEmpty
        value={categoryComment}
        onChange={(e) => setCategoryComment(e.target.value)}
      >
        <MenuItem  disabled value={'category'}>Kategori</MenuItem>
        <MenuItem value={"Miljötips"}>Miljötips</MenuItem>
        <MenuItem value={"Hållbarhetstips"}>Hållbarhetstips</MenuItem>
        <MenuItem value={"Städtips"}>Städtips</MenuItem>
        <MenuItem value={"Tvättips"}>Tvättips</MenuItem>
      </Select>
      <div>
        {forums.map((forum, i ) =>{
          if(forum.category === categoryComment){
            return(
              <Comment forum={forum} key={`forumCategory__${forum.id}`}  />
            )}
            return;
        })}
      </div>
    </div>
  );
};

export default Forum;
