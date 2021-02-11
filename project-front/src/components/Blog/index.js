import Query from "../Query";
import { Link } from "react-router-dom";
import Articles from "../../components/Articles";
import ARTICLES_QUERY from "../../queries/articles/articles";
import "./index.css";


const Blog = () => {
  return (
     <div className="blogcontainer">
      <h1>BLOGG</h1>
      <div className="bordercontainer">
        <div className="border">
        </div>
      </div>

      <div className="blog">
        <Query query={ARTICLES_QUERY}>
          {({ data: { articles } }) => {
            return <Articles articles={articles} />;
          }}
        </Query>
      </div>
      <div className="aside">
      </div>
      </div>
  );
};
export default Blog;
