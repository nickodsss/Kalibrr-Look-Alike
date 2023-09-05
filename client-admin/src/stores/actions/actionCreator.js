import { COMPANY_FETCHCOMPANY_BY_ID, COMPANY_FETCHCOMPANY_PENDING, COMPANY_FETCHCOMPANY_SUCCESS, JOB_FETCHJOB_BY_ID, JOB_FETCHJOB_PENDING, JOB_FETCHJOB_SUCCESS } from "./actionType"


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
            console.log(responseJson, '<< ini di action creator fetch jobs')
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
            console.log('masuk sini abcde', id)
            dispatch(fetchJobPending(true))
            // console.log(id, '<< ini di action creator')
            const result = await fetch(`http://localhost:3000/jobs/${id}`)
            // console.log(result)
            const responseJson = await result.json()
            console.log(responseJson, 'ini response json')
            dispatch(fetchJobDetail(responseJson))
        } catch (err) {
            console.log('masuk error fetch job sini')
            console.log(err)
        } finally {
            dispatch(fetchJobPending(false))
        }
    }
}

export const deleteJob = (id) => {
    return async (dispatch) => {
        try {
            dispatch(fetchJobPending(true))
            console.log(id, '<< ini di action creator')
            const response = await fetch(`http://localhost:3000/jobs/${id}`, {
                method: 'DELETE',
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
            dispatch(fetchJobs())
        } catch (err) {
            console.log(err)
        } finally {
            dispatch(fetchJobPending(false))
        }
    }
}

export const addJob = (job) => {
    return async (dispatch) => {
        try {
            dispatch(fetchJobPending(true))
            await fetch(`http://localhost:3000/jobs`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token")
                },
                body: JSON.stringify(job)
            })
            dispatch(fetchJobs())
        } catch (err) {
            console.log(err)
        } finally {
            dispatch(fetchJobPending(false))
        }
    }
}

export const updateJob = (id, job) => {
    return async (dispatch) => {
        try {
            console.log(id, 'masuk sini edit')
            dispatch(fetchJobPending(true))
            await fetch(`http://localhost:3000/jobs/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token")
                },
                body: JSON.stringify(job)
            })
            dispatch(fetchJobs())
        } catch (err) {
            console.log(err)
        } finally {
            dispatch(fetchJobPending(false))
        }
    }
}



// User

export const loginUser = (user) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`http://localhost:3000/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            })

            const responseJson = await response.json()
            if (responseJson.access_token) {
                localStorage.setItem("access_token", responseJson.access_token)
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const registerUser = (user) => {
    return async (dispatch) => {
        try {
            console.log('masuk sini')
            const response = await fetch(`http://localhost:3000/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token")
                },
                body: JSON.stringify(user)
            })

        } catch (err) {
            console.log(err)
        }
    }
}

// Company

export const fetchCompanySuccess = (payload) => ({
    type: COMPANY_FETCHCOMPANY_SUCCESS,
    payload
})

export const fetchCompanyPending = (payload) => ({
    type: COMPANY_FETCHCOMPANY_PENDING,
    payload
})

export const fetchCompanyDetail = (payload) => ({
    type: COMPANY_FETCHCOMPANY_BY_ID,
    payload
})

export const fetchCompanies = () => {
    return async (dispatch) => {
        try {
            console.log('masuk fetch companies')
            dispatch(fetchCompanyPending(true))
            const result = await fetch(`http://localhost:3000/companies`, {
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
            const responseJson = await result.json()
            console.log(responseJson, '<< ini di action creator fetch companies')
            dispatch(fetchCompanySuccess(responseJson))
        } catch (err) {
            console.log(err)
        } finally {
            dispatch(fetchCompanyPending(false))
        }
    }
}

export const fetchCompaniesDetail = (id) => {
    return async (dispatch) => {
        try {
            console.log(id, "ini di action creator")
            dispatch(fetchCompanyPending(true))
            // console.log(id, '<< ini di action creator')
            const result = await fetch(`http://localhost:3000/companies/${id}`, {
                headers: {
                    access_token: localStorage.getItem("access_token")
                }
            })
            // console.log(result)
            const responseJson = await result.json()
            console.log(responseJson, "ini company detail di action creator")
            dispatch(fetchCompanyDetail(responseJson))
        } catch (err) {
            console.log('masuk error sini')
            console.log(err)
        } finally {
            dispatch(fetchCompanyPending(false))
        }
    }
}

export const deleteCompany = (id) => {
    return async (dispatch) => {
        try {
            dispatch(fetchCompanyPending(true))
            console.log(id, '<< ini di action creator')
            const response = await fetch(`http://localhost:3000/companies/${id}`, {
                method: 'DELETE',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            dispatch(fetchCompanies())
        } catch (err) {
            console.log(err)
        } finally {
            dispatch(fetchCompanyPending(false))
        }
    }
}

export const addCompany = (company) => {
    return async (dispatch) => {
        try {
            dispatch(fetchCompanyPending(true))
            await fetch(`http://localhost:3000/companies`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token")
                },
                body: JSON.stringify(company)
            })
            dispatch(fetchCompanies())
        } catch (err) {
            console.log(err)
        } finally {
            dispatch(fetchCompanyPending(false))
        }
    }
}

export const updateCompany = (id, company) => {
    return async (dispatch) => {
        try {
            console.log('masuk sini edit')
            dispatch(fetchCompanyPending(true))
            await fetch(`http://localhost:3000/companies/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    access_token: localStorage.getItem("access_token")
                },
                body: JSON.stringify(company)
            })
            dispatch(fetchCompanies())
        } catch (err) {
            console.log(err)
        } finally {
            dispatch(fetchCompanyPending(false))
        }
    }
}