import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CustomLoader from '../components/CustomLoader'
import { fetchJobById } from '../stores/actions/actionCreator'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const data = useSelector((state) => state.job?.jobDetail)
    const isLoading = useSelector((state) => state.job?.isLoading)

    useEffect(() => {
        dispatch(fetchJobById(id))
    }, [])

    if (isLoading) return <CustomLoader />

    return (
        <>
            <main className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-center h-screen">
                    <div className="container mx-auto px-4 py-8">
                        <div className="flex flex-col my-4" >
                            <h2 className="text-4xl text-center font-bold text-black font-bold">Job Detail</h2>
                        </div>
                        <img src={`${data?.result?.Company?.companyLogo}`} className="w-[30vw] h-[20vw]"></img>
                        <h1 className="text-2xl font-semibold text-gray-800">{data?.result?.title}</h1>
                        <p className="text-gray-600 mt-2">{data?.result?.Company.name}</p>
                        <p className="text-gray-600 mt-2">{data?.result?.jobType}</p>

                        <div className="mt-8">
                            <h2 className="text-lg font-semibold text-gray-800">Job Description</h2>
                            <p className="text-gray-600 mt-2">{data?.result?.description}</p>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-lg font-semibold text-gray-800">Location</h2>
                            <p className="text-gray-600 mt-2">{data?.result?.Company.location}</p>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-lg font-semibold text-gray-800">Skill Requirements</h2>
                            <ul className="list-disc list-inside text-gray-600 mt-2">
                                {data?.resultSkill?.map((el) => {
                                    return (
                                        <li>{`${el.name} - ${el.level}`}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )

}

export default DetailPage