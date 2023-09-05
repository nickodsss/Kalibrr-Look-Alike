import Card from '../components/Card.jsx'

import { useEffect } from 'react'
import CustomLoader from '../components/CustomLoader.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { fetchJobs } from '../stores/actions/actionCreator.js'

const HomePage = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state?.job?.jobs)
    const isLoading = useSelector((state) => state?.job?.isLoading)


    console.log("ini dari homepage", data);

    useEffect(() => {
        dispatch(fetchJobs())
    }, [])

    // console.log(isLoading, '<< ini di homepage')

    if (isLoading) return <CustomLoader />

    return (
        <>
            <main className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between bg-cover bg-gray-100 bg-center bg-fixed bg-no-repeat bg-opacity-50"
                    style={{ backgroundImage: `url(https://st.depositphotos.com/3489481/55753/v/600/depositphotos_557534484-stock-illustration-vector-business-people-choosing-right.jpg)` }}>
                    <div>
                        <h1 className="text-4xl font-bold text-gray-900 ml-2">Your dream job is just a click away</h1>
                        <p className="mt-4 text-xl text-gray-900 font-bold ml-2">The simplest way to career opportunities starts here</p>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-4xl text-center font-bold text-black font-bold">Find a career that works for you</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">

                        {data && data?.map((el) => {
                            return (
                                <Card key={el?.id} el={el} />
                            )
                        })}
                        {/* Job Card*/}
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage