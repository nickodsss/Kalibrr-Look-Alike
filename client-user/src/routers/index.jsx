import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../pages/HomePage.jsx'
import DetailPage from '../pages/DetailPage.jsx'
import BaseLayout from '../layouts/BaseLayout.jsx';

const router = createBrowserRouter([
    {
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/detail/:id",
                element: <DetailPage />
            }
        ]
    }
]);

export default router