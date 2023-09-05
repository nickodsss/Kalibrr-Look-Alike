import TableListCompany from '../components/TableListCompany.jsx'
import Button from '../components/Button.jsx'

import { useEffect } from 'react'
import CustomLoader from '../components/CustomLoader.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCompanies } from '../stores/actions/actionCreator.js'
import { useNavigate } from 'react-router-dom'


const CompanyPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector((state) => state?.company?.companies)
    const isLoading = useSelector((state) => state?.company?.isLoading)


    useEffect(() => {
        dispatch(fetchCompanies())
    }, [])

    console.log("ini dari company page", data);

    if (isLoading) return <CustomLoader />

    return (
        <>
            <div className="flex mt-4 mx-4 justify-between">
                <h2 className="text-lg font-bold mx-4 mt-4">Company List</h2>
                <Button onClick={() => { navigate('/add-company') }} className="bg-[#0086FF] hover:bg-blue-950 text-white px-4 py-2 rounded" name="+ Add New Company" >
                </Button>
            </div>

            {data?.map((el) => {
                return (
                    <TableListCompany key={el?.id} el={el} />
                )
            })}
        </>
    )

}

export default CompanyPage