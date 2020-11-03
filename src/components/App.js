import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import SetupPage from "./setup/SetupPage";
import Header from "./common/Header";
import Footer from "./common/Footer";
import PageNotFound from "./PageNotFound";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/setup" component={SetupPage} />
        {/* <Route component={PageNotFound} /> */}
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
