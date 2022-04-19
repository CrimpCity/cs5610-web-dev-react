// import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootswatch/cyborg/bootstrap.min.css';
// import './vendors/fontawesome/css/all.min.css';

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../src/components/HomePage/index.js";
import Profile from './components/Profile/index.js';
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import UserComponent from "./components/RegistrationPage/UserComponent";

// import Netflicks from "./components/index.js";


function App() {
  return (
    <BrowserRouter>
      <div className="flex-container">
        <Routes>
          <Route path="/">
            <Route path="homepage"
              element={<HomePage />} />
            <Route path="profile"
              element={<Profile />} />
            <Route path="landingpage"
                   element={<LandingPage />}/>
            <Route path="login"
                   element={<LoginPage />}/>
            <Route path="registration"
                   element={<RegistrationPage />}/>
            <Route path="registration/select-avatar"
                   element={<UserComponent />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
