import { Switch, Route } from "react-router-dom";
import Nav from ".././components/Nav";

import Articles from "./Articles";
import Article from "./Article";
import Category from "./Category";
import Blog from ".././components/Blog";
import Form from "./Form";
import Recipes from "./Recipes";
import Logo from './logotype3.jpg';
import { Link } from "react-router-dom";
import "./app.css";

document.body.style.margin = 0;

function App() {
  return (
    <div className="App">

    <header className="header">
      <div className="logotype">
        <Link to="/"><img src={Logo} alt="logotype" width="200" height="200"/></Link>
      </div>
      <Nav />

    </header>
      <Switch>
        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/forum/" component={Form} exact />
        <Route path="/recipes/" component={Recipes} exact />
        <Route path="/blog/" component={Blog} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
    </div>
  );
}

export default App;
