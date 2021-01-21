import { Switch, Route } from "react-router-dom";
import Nav from ".././components/Nav";
import Articles from "./Articles";
import Article from "./Article";
import Category from "./Category";

function App() {
  return (
    <div className="App">
    <h1>It starts with you</h1>
      <Nav />
      <Switch>
        <Route path="/" component={Articles} exact />
        <Route path="/article/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
    </div>
  );
}

export default App;
