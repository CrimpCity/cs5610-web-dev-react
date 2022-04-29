import './vendors/bootstrap/bootswatch/cyborg/bootstrap.min.css';

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../src/components/HomePage/index.js";
import Profile from './components/Profile/';
import SearchScreen from "./components/SearchScreen";
import DetailScreen from "./components/DetailScreen";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import EditProfile from "./components/Profile/EditProfile";
import PrivacyScreen from "./components/PrivacyPage/index.js"
import {AuthProvider, useAuth} from "./contexts/auth-context";
import RootHandler from "./components/RootHandler";
import UserProfile from "./components/UserProfile";
import React from "react";
import { combineReducers, createStore } from "redux";
import bookmarksReducer from "./reducers/bookmark-reducer.js"
import profileReducer from "./reducers/profile-reducer";
import { Provider } from "react-redux";
import EditProfile from "./components/Profile/EditProfile";


const reducer = combineReducers({
       bookmarks: bookmarksReducer, profile: profileReducer
   });

const store = createStore(reducer);

function App() {
    return (
    <AuthProvider>
       <Provider store={store}>
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
                      <Route path="edit-profile"
                             element={<EditProfile />} />
                    </Route>
                  </Routes>
                </div>
              </BrowserRouter>
       </Provider>
    </AuthProvider>
  );
}


export default App;
