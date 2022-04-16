import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootswatch/cyborg/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/components/HomePage/index.js";
import Profile from './components/Profile/index.js';
// import Netflicks from "./components/index.js";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="homepage"
              element={<HomePage />} />
            <Route path="profile"
              element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
