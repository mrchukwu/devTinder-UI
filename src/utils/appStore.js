import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "./userSlice";
import feedReducer from "./FeedSlice";
import connectionReducer from "./connectionSlice";
import requestReducer from "./rquestSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        connections: connectionReducer,
        requests: requestReducer
    }
});

export default appStore;