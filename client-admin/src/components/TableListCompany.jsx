import Button from './Button.jsx'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteCompany, fetchCompaniesDetail } from '../stores/actions/actionCreator.js'

const TableListCompany = ({ el }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const deleteRequest = (id) => {
        dispatch(deleteCompany(id))
    }

    return (
        <>
            <ul role="list" className="divide-y divide-gray-100 mx-4  px-4">
                <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4">
                        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={`${el?.companyLogo}`} alt="" />
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{el?.name}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{el?.description}</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                        <Button className="text-blue-500 font-medium" name="Edit" onClick={() => navigate(`/edit-company/${el.id}`)}></Button>
                        <Button className="text-red-500 font-medium" onClick={() => deleteRequest(el.id)} name="Delete"></Button>
                    </div>
                </li>

            </ul>
        </>
    )
}

export default TableListCompany