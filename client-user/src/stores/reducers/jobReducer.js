import { JOB_FETCHJOB_BY_ID, JOB_FETCHJOB_PENDING, JOB_FETCHJOB_SUCCESS } from "../actions/actionType"


const initialState = {
    jobs: [],
    jobDetail: [],
    isLoading: false
}

const jobReducer = (state = initialState, action) => {
    // console.log(action, '<< ini action di reducer')
    if (action.type === JOB_FETCHJOB_SUCCESS) {
        console.log('masuk sini success')
        return {
            ...state,
            jobs: action.payload,
            isLoading: false
        }
    } else if (action.type === JOB_FETCHJOB_PENDING) {
        console.log('masuk sini pending')
        return {
            ...state,
            isLoading: action.payload
        }
    } else if (action.type === JOB_FETCHJOB_BY_ID) {
        // console.log(action)
        // console.log(action, '<<< ini action baru by id ')
        return {
            ...state,
            jobDetail: action.payload,
            isLoading: false
        }
    }
    return state
}

export default jobReducer