import { Link } from "react-router-dom";
import CATEGORIES_QUERY from "../../queries/category/categories";
import Query from "../Query";
import "./index.css";



const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/blog/">Blogg</Link></li>
          <li><Link to="/forum/">Forum</Link></li>
          <Query query={CATEGORIES_QUERY} id={null}>
            {({ data: { categories } }) => {
              return (

                <div>
                  <nav>
                    <ul>
                        {categories.map((category, i) => {
                          return (
                            <li key={category.id}>
                              <Link className="link"
                                to={`/category/${category.id}`}

                              >
                                {category.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>

                  </nav>
                </div>
              );
            }}
          </Query>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
