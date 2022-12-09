import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <h1>hello</h1>
        },
        {
            path: '/login',
            element: <h1>login</h1>
        },
        {
            path: '/signup',
            element: <h1>signup</h1>
        }
    ]
  }
])

export default router;