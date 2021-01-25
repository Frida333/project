import Articles from "../../components/Articles";
import Query from "../../components/Query";
import ARTICLES_QUERY from "../../queries/articles/articles";
import "./index.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main">
      <div className="info">
        <div>
          <h2>Vår vision</h2>
        </div>
        <div className="text">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="container">
          <div className="recipe">
            <img src="" />
          </div>
          <div className="forum">
            <Link to="/forum/">Forum</Link>
          </div>
        </div>
      </div>
      <div className="article">
        <Query query={ARTICLES_QUERY}>
          {({ data: { articles } }) => {
            return <Articles articles={articles} />;
          }}
        </Query>
      </div>
    </div>
  );
};

export default Home;
