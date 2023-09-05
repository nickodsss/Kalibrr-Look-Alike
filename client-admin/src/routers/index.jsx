import { createBrowserRouter, redirect } from 'react-router-dom'

import HomePage from '../pages/HomePage.jsx'
import BaseLayout from '../layouts/BaseLayout.jsx'
import DetailPage from '../pages/DetailPage.jsx'
import LoginPage from '../pages/LoginPage.jsx'
import RegisterPage from '../pages/RegisterPage.jsx'
import CompanyPage from '../pages/CompanyPage.jsx'
import FormCompany from '../components/FormCompany.jsx'
import FormJob from '../components/FormJob.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        loader: () => {
            const token = localStorage.getItem("access_token");
            if (!token) {
                throw redirect("/login");
            }
            return null;
        },
        children: [
            {
                path: "",
                element: <HomePage />
            },
            {
                path: "/detail/:id",
                element: <DetailPage />
            },
            {
                path: "/add-job",
                element: <FormJob />
            },
            {
                path: "company",
                element: <CompanyPage />
            },

            {
                path: "/register",
                element: <RegisterPage />
            },
            {
                path: "add-company",
                element: <FormCompany />
            },
            {
                path: "edit-company/:id",
                element: <FormCompany />
            },
            {
                path: "edit-job/:jobId",
                element: <FormJob />
            }
        ]
    },
    {
        path: "/login",
        element: <LoginPage />,
        loader: () => {
            const token = localStorage.getItem("access_token");
            if (token) {
                throw redirect("/");
            }
            return null;
        }
    }

])

export default router