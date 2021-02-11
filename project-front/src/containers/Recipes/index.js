import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Query from "../../components/Query";
import Checkbox from '@material-ui/core/Checkbox';
import "./index.css";


const Recipes = () => {
  const [fish, setFish] = useState('');

  const handleChange = (e) => {
    setFish(e.target.checked);
  }

  useEffect(() => {
    if (!fish) {
    setFish('none');
    }
  }, [fish, setFish])



  return (
    <div className="recipes">
      <h1>SÖK EFTER RECEPT</h1>
      <div className="bordercontainer">
        <div className="border">
        </div>
      </div>
      <div className="recipe">
        <Checkbox
          checked={fish === 'none' ? false : fish}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Fisk' }}
        />
        <label>Fisk</label>
      </div>
      <div className="aside">
      </div>
    </div>
  );
};

export default Recipes;
