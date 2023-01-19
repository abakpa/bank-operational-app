import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
import { hrReducer } from "./reducers/hrReducer";
import { staffReducer } from "./reducers/staffReducer";
import { customerReducer } from "./reducers/customerReducer";
import { loginReducer } from "./reducers/loginReducer";
import { tellerReducer } from "./reducers/tellerReducer";
import { vaultReducer } from "./reducers/vaultReducer";
import { adminReducer } from "./reducers/adminReducer";

const reducer = combineReducers({
  hr: hrReducer,
  staff: staffReducer,
  customer: customerReducer,
  login: loginReducer,
  teller: tellerReducer,
  vault: vaultReducer,
  admin: adminReducer,
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("login")
  ? JSON.parse(localStorage.getItem("login"))
  : "";

const INITIAL_STATE = {
  login: {
    login: cartFromLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
