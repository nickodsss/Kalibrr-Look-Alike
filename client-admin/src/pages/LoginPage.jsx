import { useDispatch } from "react-redux"
import { useState } from "react"
import { loginUser } from "../stores/actions/actionCreator"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"


const LoginPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isFormValid, setFormValid] = useState(true)

    const [formLogin, setFormLogin] = useState({
        email: "",
        password: "",
    });

    const allInputHandler = (event) => {
        setFormLogin({
            ...formLogin,
            [event.target.name]: event.target.value
        })
    }

    const formOnSubmitHandler = (event) => {
        event.preventDefault()
        setFormValid(true)

        if (formLogin.email === "" || formLogin.password === "") {
            setFormValid(false)
        } else {
            dispatch(loginUser(formLogin)).then(() => {
                navigate('/')
            })
        }
    }



    return (
        <>
            {/* TAMBAHIN PERKONDISIAN IS FORM VALID */}
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="w-full max-w-md">
                    <form onSubmit={formOnSubmitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <h2 className="text-2xl mb-6 text-center">Login Page</h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                id="email"
                                placeholder="Email"
                                name="email"
                                value={formLogin.email}
                                onChange={allInputHandler}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={formLogin.password}
                                name="password"
                                onChange={allInputHandler}
                                required
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <Button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                name="Submit"
                            >
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default LoginPage