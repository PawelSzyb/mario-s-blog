import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import { reduxFirestore, getFirebase } from "react-redux-firebase";
import { reactReduxFirebase, getFirestore } from "redux-firestore";
import { compose } from "redux";
import fbConfig from "./config/fb";

const middleware = [
  thunk.withExtraArgument({
    getFirebase,
    getFirestore
  })
];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig)
  )
);

export default store;
