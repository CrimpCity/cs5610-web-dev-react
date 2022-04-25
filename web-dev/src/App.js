import './vendors/bootstrap/bootswatch/cyborg/bootstrap.min.css';

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
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
import AdminPage from "./components/AdminPage";

// import Netflicks from "./components/index.js";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="container-fluid">
          <Routes>
            <Route path="/">
              <Route index element={(<Navigate to="/landingpage" replace={true}></Navigate>)} />
              <Route path="homepage"
                     element={<HomePage />} />
              <Route path="profile"
                     element={<Profile />} />
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
              <Route path="admin"
                     element={<AdminPage />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );

}


export default App;
