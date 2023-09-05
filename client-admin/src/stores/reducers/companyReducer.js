import { COMPANY_FETCHCOMPANY_BY_ID, COMPANY_FETCHCOMPANY_PENDING, COMPANY_FETCHCOMPANY_SUCCESS } from "../actions/actionType"


const initialState = {
    companies: [],
    companyDetail: [],
    isLoading: false
}

const companyReducer = (state = initialState, action) => {
    if (action.type === COMPANY_FETCHCOMPANY_SUCCESS) {
        console.log('masuk sini success')
        return {
            ...state,
            companies: action.payload,
            isLoading: false
        }
    } else if (action.type === COMPANY_FETCHCOMPANY_PENDING) {
        console.log('masuk sini pending')
        return {
            ...state,
            isLoading: action.payload
        }
    } else if (action.type === COMPANY_FETCHCOMPANY_BY_ID) {
        return {
            ...state,
            companyDetail: action.payload,
            isLoading: false
        }
    }
    return state
}

export default companyReducer