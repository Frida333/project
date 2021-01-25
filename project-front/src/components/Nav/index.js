
import Query from "../Query";
import { Link } from "react-router-dom";

import CATEGORIES_QUERY from "../../queries/category/categories";

const Nav = () => {
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              <nav>
                <div>
                  <ul>
                    <li>
                      <Link to="/">Hem</Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul>
                    {categories.map((category, i) => {
                      return (
                        <li key={category.id}>
                          <Link
                            to={`/category/${category.id}`}
                            className="uk-link-reset"
                          >
                            {category.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};
export default Nav;
