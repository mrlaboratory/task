import {
    createBrowserRouter,
} from "react-router-dom";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    }
]);