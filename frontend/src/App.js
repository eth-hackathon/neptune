import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

/* Layouts */
import {Dapp as DappLayout} from "layouts/Dapp.js";
import {Main as MainLayout} from "layouts/Main.js";

/* Main Pages */
import {Index as Main} from "pages/Main/Index.js";
import Docs from "pages/Main/Docs.js";
import About from "pages/Main/About.js";

/* Dapp  Pages */
import {Index as Product} from "pages/Dapp/Index.js";
import Profile from "pages/Dapp/Profile.js";
import Settings from "pages/Dapp/Settings.js";
import {Index as Overview} from "pages/Dapp/Overview/Index.js";
import Protocol from "pages/Dapp/Overview/Protocol";

function App() {
  return (
    <Router>
      <Switch>
        {/* Main pages */}
        <RouteWrapper exact path="/" component={Main} layout={MainLayout} />
        <RouteWrapper path="/docs" component={Docs} layout={MainLayout} />
        <RouteWrapper path="/about" component={About} layout={MainLayout} />

        {/* Dapp pages */}
        <RouteWrapper exact path="/dapp" component={Product} layout={DappLayout} />

        <RouteWrapper
          path="/dapp/overview/:protocolName"
          component={Protocol}
          layout={DappLayout}
        />
        <RouteWrapper path="/dapp/overview" component={Overview} layout={DappLayout} />
        <RouteWrapper path="/dapp/profile" component={Profile} layout={DappLayout} />
        <RouteWrapper path="/dapp/settings" component={Settings} layout={DappLayout} />
      </Switch>
    </Router>
  );
}

/* Route Abstraction to wrap pages in their respective layout */
function RouteWrapper({component: Component, layout: Layout, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

export default App;
