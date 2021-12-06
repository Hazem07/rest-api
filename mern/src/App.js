import { Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Add from "./pages/Add";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contactlist" component={Contacts} />
        <Route path={["/add", "/edit/:id"]} component={Add} />
        <Route path="/*" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
