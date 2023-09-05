import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../stores/actions/actionCreator"
import { useState } from "react"
import Button from "../components/Button"

const RegisterPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isFormValid, setFormValid] = useState(true)

    const [formRegister, setFormRegister] = useState({
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: ""
    });

    const allInputHandler = (event) => {
        setFormRegister({
            ...formRegister,
            [event.target.name]: event.target.value
        })
    }

    const formOnSubmitHandler = (event) => {
        event.preventDefault()
        setFormValid(true)

        if (formRegister.email === "" || formRegister.password === "") {
            setFormValid(false)
        } else {
            dispatch(registerUser(formRegister)).then(() => {
                navigate('/')
            })
        }
    }
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="w-full max-w-md">
                    <form onSubmit={formOnSubmitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-2xl mb-6 text-center">Register Page</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username (optional)
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Insert username here..."
                                id="username"
                                name="username"
                                value={formRegister.username}
                                onChange={allInputHandler}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <label className="text-danger text-end fw-bold">*</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Insert email here..."
                                id="email"
                                name="email"
                                value={formRegister.email}
                                onChange={allInputHandler}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <label className="text-danger text-end fw-bold">*</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Password"
                                id="password"
                                name="password"
                                value={formRegister.password}
                                onChange={allInputHandler}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                                Phone Number (optional)
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Insert phone number here..."
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formRegister.phoneNumber}
                                onChange={allInputHandler}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                Address (optional)
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Insert address here..."
                                id="address"
                                name="address"
                                value={formRegister.address}
                                onChange={allInputHandler}
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
                                name="Register Admin"
                            >
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterPage