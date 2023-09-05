import { JOB_FETCHJOB_BY_ID, JOB_FETCHJOB_PENDING, JOB_FETCHJOB_SUCCESS } from "../actions/actionType"


const initialState = {
    jobs: [],
    jobDetail: [],
    isLoading: false
}

const jobReducer = (state = initialState, action) => {
    if (action.type === JOB_FETCHJOB_SUCCESS) {
        return {
            ...state,
            jobs: action.payload,
            isLoading: false
        }
    } else if (action.type === JOB_FETCHJOB_PENDING) {
        return {
            ...state,
            isLoading: action.payload
        }
    } else if (action.type === JOB_FETCHJOB_BY_ID) {
        return {
            ...state,
            jobDetail: action.payload,
            isLoading: false
        }
    }
    return state
}

export default jobReducer