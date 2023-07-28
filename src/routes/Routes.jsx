import {
    createBrowserRouter,
} from "react-router-dom";
import MyJobs from "../Pages/MyJobs/MyJobs";
import Main from "../Layout/Main";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MyJobs></MyJobs>
            },
        ]
    }
]);