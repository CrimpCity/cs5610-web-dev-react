import './vendors/bootstrap/bootswatch/cyborg/bootstrap.min.css';

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../src/components/HomePage/index.js";
import Profile from './components/Profile/index.js';
import SearchScreen from "./components/SearchScreen";
import DetailScreen from "./components/DetailScreen";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import UserComponent from "./components/RegistrationPage/UserComponent";
import PrivacyScreen from "./components/PrivacyPage/index.js"
import {AuthProvider} from "./contexts/auth-context";
import RootHandler from "./components/RootHandler";
import UserProfile from "./components/UserProfile";

// import Netflicks from "./components/index.js";


function App() {
    return (
    <AuthProvider>
      <BrowserRouter>
        <div className="container-fluid">
          <Routes>
            <Route path="/">
              <Route index element={<RootHandler />} />
              <Route path="homepage"
                     element={<HomePage />} />
              <Route path="profile"
                     element={<Profile />} />
              <Route path="profile/:username"
                     element={<UserProfile />} />
              <Route path="search"
                     element={<SearchScreen />} />
              <Route path="privacy"
                     element={<PrivacyScreen />} />
              <Route path="detail/:movieId"
                     element={<DetailScreen />} />
              <Route path="landingpage"
                     element={<LandingPage />} />
              <Route path="login"
                     element={<LoginPage />} />
              <Route path="registration"
                     element={<RegistrationPage />} />
              <Route path="registration/select-avatar"
                     element={<UserComponent />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}


export default App;
