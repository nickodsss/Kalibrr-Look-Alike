import Button from "./Button"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CustomLoader from "./CustomLoader.jsx"
import { fetchCompanies, addJob, updateJob } from "../stores/actions/actionCreator"


const FormJob = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoading = useSelector((state) => state?.job?.isLoading)
    const company = useSelector((state) => state?.company?.companies)
    const jobDetail = useSelector((state) => state?.job?.jobDetail)
    const { jobId } = useParams()

    // console.log(jobDetail, "inni di form job line 17")

    console.log(company, "ini companyy")


    useEffect(() => {
        dispatch(fetchCompanies())
    }, [dispatch])

    const [isFormValid, setFormValid] = useState(true)

    const [formValue, setFormValue] = useState({
        title: "",
        description: "",
        companyId: company[0].id,
        jobType: "Full Time",
        name1: "",
        level1: "Beginner",
        name2: "",
        level2: "Beginner",
        name3: "",
        level3: "Beginner"
    })

    if (jobId) {

        useEffect(() => {
            setFormValue(jobDetail.result);
        }, [setFormValue, jobDetail.result]);
    }

    const allInputHandler = (event) => {
        console.log(event.target.name, event.target.value)
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })
    }

    const formOnSubmitHandler = (event) => {
        event.preventDefault()
        setFormValid(true)

        if (formValue.title === '' || formValue.description === "" || formValue.name1 === '' || formValue.level1 === "" || formValue.name2 === '' || formValue.level2 === "" || formValue.name3 === '' || formValue.level3 === "") {
            setFormValid(false)
        }

        if (jobId) {
            dispatch(updateJob(jobId, formValue)).then(() => {
                setFormValue({
                    title: "",
                    description: "",
                    companyId: "",
                    jobType: "Full Time",
                    name1: "",
                    level1: "Beginner",
                    name2: "",
                    level2: "Beginner",
                    name3: "",
                    level3: "Beginner"
                })
            }).then(() => {
                navigate('/')
            })

        } else {
            console.log('masuk dispatch else')
            dispatch(addJob(formValue)).then(() => {
                setFormValue({
                    title: "",
                    description: "",
                    companyId: "",
                    jobType: "Full Time",
                    name1: "",
                    level1: "Beginner",
                    name2: "",
                    level2: "Beginner",
                    name3: "",
                    level3: "Beginner"
                })
            }).then(() => {
                navigate('/')
            })
        }

    }

    if (isLoading) return <CustomLoader />

    return (
        <div className="flex justify-center items-center h-fit">
            {/* TAMBAHIN IS VALID FALSE */}
            <form onSubmit={formOnSubmitHandler} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-2xl font-bold mb-4">{jobId ? "Edit Job" : "Add Job"}</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Job title"
                        value={formValue.title}
                        onChange={allInputHandler}
                        required
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
                        placeholder="Job description"
                        value={formValue.description}
                        onChange={allInputHandler}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyId">
                        Company
                    </label>
                    <select id="companyId" name="companyId" onChange={allInputHandler} >
                        {company.map((el) => {
                            return (
                                <option selected={jobId && (jobDetail.result.companyId === el.id) ? 'selected' : ''} value={el.id} key={el.id}>
                                    {el.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobType">
                        Job Type
                    </label>
                    <select id="jobType" name="jobType" onChange={allInputHandler}>
                        <option selected={jobId && (jobDetail.result.jobType == 'Full Time') ? 'selected' : ''}>Full Time</option>
                        <option selected={jobId && (jobDetail.result.jobType == 'Part Time') ? 'selected' : ''} >Part Time</option>
                    </select>
                </div>
                {
                    !jobId && <>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skill1">
                                Skill 1
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="skill1"
                                name="name1"
                                type="text"
                                placeholder="Add skill"
                                value={formValue.name1}
                                onChange={allInputHandler}
                                required
                            />
                            <select id="skill1" name="level1" onChange={allInputHandler}>
                                <option>Beginner</option>
                                <option>Advanced</option>
                                <option>Intermediate</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skill2">
                                Skill 2
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="skill2"
                                name="name2"
                                type="text"
                                placeholder="Add skill"
                                value={formValue.name2}
                                onChange={allInputHandler}
                                required
                            />
                            <select id="skill2" name="level2" onChange={allInputHandler}>
                                <option>Beginner</option>
                                <option>Advanced</option>
                                <option>Intermediate</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skill3">
                                Skill 3
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="skill3"
                                name="name3"
                                type="text"
                                placeholder="Add skill"
                                value={formValue.name3}
                                onChange={allInputHandler}
                                required
                            />
                            <select id="skill3" name="level3" onChange={allInputHandler}>
                                <option>Beginner</option>
                                <option>Advanced</option>
                                <option>Intermediate</option>
                            </select>
                        </div>
                    </>
                }
                <div className="flex items-center justify-between">
                    <Button
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
            </form >
        </div >
    )
}

export default FormJob