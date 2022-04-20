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

// import Netflicks from "./components/index.js";


function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Routes>
          <Route path="/">
            <Route index element={(<Navigate to="/landingpage" replace={true}></Navigate>)} />
            <Route path="homepage"
                   element={<HomePage />} />
            <Route path="profile"
                   element={<Profile />} />
            <Route index path="search"
                   element={<SearchScreen />} />
            <Route path="detail/:movieId"
                   element={<DetailScreen />} />
            <Route path="landingpage"
                   element={<LandingPage />} />
            <Route path="login"
                   element={<LoginPage />} />
            <Route path="registration"
                   element={<RegistrationPage />} />
            <Route path="registration/select-avatar"
                   element={<UserComponent />}/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
