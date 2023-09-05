import { applyMiddleware, legacy_createStore as createStore, combineReducers } from "redux"
import thunk from "redux-thunk"

import jobReducer from './reducers/jobReducer'
import companyReducer from "./reducers/companyReducer"

const rootReducer = combineReducers({
    job: jobReducer,
    company: companyReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))

export default store