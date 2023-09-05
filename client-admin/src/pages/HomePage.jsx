import TableList from '../components/TableList.jsx'
import Button from '../components/Button.jsx'

import { useEffect } from 'react'
import CustomLoader from '../components/CustomLoader.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCompanies, fetchJobs } from '../stores/actions/actionCreator.js'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector((state) => state?.job?.jobs)
    const isLoading = useSelector((state) => state?.job?.isLoading)

    console.log("ini dari homepage", data);

    useEffect(() => {
        dispatch(fetchJobs())
    }, [])

    useEffect(() => {
        dispatch(fetchCompanies())
    }, [])

    if (isLoading) return <CustomLoader />

    return (
        <>
            <div className="flex mt-4 mx-4 justify-between">
                <h2 className="text-lg font-bold mx-4 mt-4">Job List</h2>
                <Button className="bg-[#0086FF] text-white px-4 py-2 rounded" onClick={() => { navigate('add-job') }} name="+ Add New Job" >
                </Button>
            </div>

            {data?.map((el) => {
                return (
                    <TableList key={el?.id} el={el} />
                )
            })}
        </>
    )
}

export default HomePage