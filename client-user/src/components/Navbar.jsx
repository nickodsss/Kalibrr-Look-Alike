import { Link } from 'react-router-dom'
export default function Navbar() {

    return (
        <>
            <header className="bg-white shadow sticky top-0">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex justify-between items-center">
                        <p className="text-gray-800 font-semibold text-lg">Kalibrr</p>
                        <Link to="/" >Jobseeker</Link>
                    </nav>
                </div>
            </header >
        </>
    )
}