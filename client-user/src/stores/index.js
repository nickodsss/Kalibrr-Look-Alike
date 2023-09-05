import { applyMiddleware, legacy_createStore as createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

import jobReducer from './reducers/jobReducer'

// Property dari objectnya adalah "nama alias" dari reducernya
const rootReducer = combineReducers({
    job: jobReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
