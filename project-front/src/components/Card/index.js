import { Link } from "react-router-dom";
import "./index.css";

const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image.url
      : process.env.REACT_APP_BACKEND_URL + article.image.url;
  return (
    <Link to={`/article/${article.id}`} >
       <div className="card">
        <div >
          <img
            src={imageUrl}
            alt={article.image.url}
            width="300px"
          />
        </div>
        <div className="articleinfo" >


            Kategori: {article.category.name}


          <h2>
            {article.title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Card;
