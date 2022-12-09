import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";



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
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        }
    ]
  }
])

export default router;