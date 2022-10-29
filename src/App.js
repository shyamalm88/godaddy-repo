import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Details from "./components/details";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <a className="navbar-brand" to="/">
                GoDaddyRepo
              </a>

              <div className=" navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route exact path="/details/:domain/:url" element={<Details />} />
            </Routes>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
