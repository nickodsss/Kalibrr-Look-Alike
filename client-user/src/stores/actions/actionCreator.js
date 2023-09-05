import { JOB_FETCHJOB_BY_ID, JOB_FETCHJOB_PENDING, JOB_FETCHJOB_SUCCESS } from "./actionType"


export const fetchJobSuccess = (payload) => ({
    type: JOB_FETCHJOB_SUCCESS,
    payload
})

export const fetchJobPending = (payload) => ({
    type: JOB_FETCHJOB_PENDING,
    payload
})

export const fetchJobDetail = (payload) => ({
    type: JOB_FETCHJOB_BY_ID,
    payload
})


export const fetchJobs = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchJobPending(true))
            const result = await fetch(`http://localhost:3000/jobs`)
            const responseJson = await result.json()
            dispatch(fetchJobSuccess(responseJson))
        } catch (err) {
            console.log(err)
        } finally {
            dispatch(fetchJobPending(false))
        }
    }
}

export const fetchJobById = (id) => {
    return async (dispatch) => {
        try {
            dispatch(fetchJobPending(true))
            const result = await fetch(`http://localhost:3000/jobs/${id}`)
            const responseJson = await result.json()
            dispatch(fetchJobDetail(responseJson))
        } catch (err) {
            console.log(err)
        } finally {
            dispatch(fetchJobPending(false))
        }
    }
}