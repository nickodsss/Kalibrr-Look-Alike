import Button from './Button'
import { useNavigate, NavLink } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
    }

    return (
        <>
            <nav className="bg-[#0086FF] text-white p-4 flex items-center justify-between sticky top-0">
                <a className="text-lg font-bold">
                    Kalibrr Admin Page
                </a>
                <div className="flex items-center space-x-4">
                    <NavLink to="/register" >+Register Admin</NavLink>
                    <NavLink to="/login" onClick={logout}>Logout</NavLink>
                    <Button onClick={() => { navigate(`/`) }} className="bg-white hover:bg-blue-950 text-[#0086FF] px-4 py-2 rounded" name='Home'>
                    </Button>
                    <Button onClick={() => { navigate(`/company`) }} className="bg-white text-[#0086FF] hover:bg-blue-950 px-4 py-2 rounded" name='List Company'>
                    </Button>
                </div>
            </nav>

        </>
    )
}