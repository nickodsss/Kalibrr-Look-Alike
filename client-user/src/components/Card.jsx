import Button from './Button.jsx'
import { useNavigate } from 'react-router-dom'

export default function Card({ el }) {
    const navigate = useNavigate()
    return (
        <>
            <div className="bg-white rounded-md shadow-md flex flex-col">
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{el?.title}</h3>
                    <p className="text-gray-600">{el?.Company?.name}</p>
                    <p className="text-gray-600 mt-2">{el?.jobType}</p>
                </div>
                <div className="bg-gray-100 px-4 py-3 mt-auto">
                    <Button name={'Detail'} className="bg-[#0086FF] text-white px-4 py-2 rounded-md" onClick={() => { navigate(`/detail/${el.id}`) }} />
                </div>
            </div>
        </>
    )
}