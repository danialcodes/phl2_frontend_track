import App from "@/App";
import Tasks from "@/pages/Tasks";
import Users from "@/pages/Users";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Tasks/>
            },
            {
                path: "/users",
                element: <Users/>
            }
        ]
    },
    
])

export default routes;