import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import homePostReducer from "./reducers/home-post-reducer"
import navsReducer from "./reducers/navs-reducer"
import profileReducer from "./reducers/profile-reducer"

import ExploreScreen from "./ExploreScreen/index.js"


const reducer = combineReducers({
    tuits: tuitsReducer,
    who: whoReducer,
    homePosts: homePostReducer,
    navs: navsReducer,
    profile: profileReducer
});

const store = createStore(reducer);

const Tuiter = () => {
    return (
        <>
            <Provider store={store}>
                <ExploreScreen />
            </Provider>
        </>
    )
};

export default Tuiter;