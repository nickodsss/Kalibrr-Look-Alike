import { useNavigate, useParams } from "react-router-dom"
import Button from "./Button"
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCompany, updateCompany, fetchCompaniesDetail } from "../stores/actions/actionCreator"
import CustomLoader from './CustomLoader.jsx'


const FormCompany = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoading = useSelector((state) => state?.company?.isLoading)
    const companyDetail = useSelector((state) => state?.company?.companyDetail)
    const { id } = useParams()

    const [isFormValid, setFormValid] = useState(true)

    const [formValue, setFormValue] = useState({
        name: "",
        companyLogo: "",
        location: "",
        email: "",
        description: ""
    })

    if (id) {
        useEffect(() => {
            dispatch(fetchCompaniesDetail(id));
        }, []);

        useEffect(() => {
            setFormValue(companyDetail);
        }, [setFormValue, companyDetail]);
    }


    const allInputHandler = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })
    }

    const formOnSubmitHandler = (event) => {
        event.preventDefault()
        setFormValid(true)

        if (formValue.name === '' || formValue.companyLogo === "" || formValue.location === '' || formValue.description === "") {
            setFormValid(false)
        } else {
            if (id) {
                dispatch(updateCompany(id, formValue)).then(() => {
                    setFormValue({
                        name: "",
                        companyLogo: "",
                        location: "",
                        email: "",
                        description: ""
                    })
                }).then(() => {
                    navigate('/company')
                })
            } else {
                dispatch(addCompany(formValue)).then(() => {
                    setFormValue({
                        name: "",
                        companyLogo: "",
                        location: "",
                        email: "",
                        description: ""
                    })
                }).then(() => {
                    navigate('/company')
                })
            }
        }
    }

    if (isLoading) return <CustomLoader />

    return (
        <div className="flex justify-center items-center h-screen">
            {/* TAMBAHIN IS VALID FALSE */}
            <form onSubmit={formOnSubmitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-bold mb-4">{id ? "Edit Company" : "Add Company"}</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Company name"
                        value={formValue.name}
                        onChange={allInputHandler}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="logo">
                        Company Logo
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="logo"
                        name="companyLogo"
                        type="text"
                        placeholder="Logo URL"
                        value={formValue.companyLogo}
                        onChange={allInputHandler}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                        Location
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Company location"
                        value={formValue.location}
                        onChange={allInputHandler}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email(Optional)
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email address"
                        value={formValue.email}
                        onChange={allInputHandler}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        name="description"
                        placeholder="Company description"
                        value={formValue.description}
                        onChange={allInputHandler}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <Button onClick={() => { navigate(-1) }}
                        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" name="Back"
                    >
                    </Button>
                    <Button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        name="Submit"
                    >
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default FormCompany