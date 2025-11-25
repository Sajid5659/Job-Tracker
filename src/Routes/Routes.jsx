import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Errorpage from "../Pages/Errorpage";
import Home from "../HomeLayout/Home";
import LoginPage from "../Pages/LoginPage";
import Register from "../Pages/Register";
import CompanyDetails from "../HomeLayout/CompanyDetails";
import AuthLayout from "../Layouts/AuthLayout";
import Companies from "../HomeLayout/Companies";
import PrivateRoute from "../Provider/PrivateRoute";
import LoadingPage from "../Pages/LoadingPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement : <Errorpage></Errorpage>,
    children: [
        {
            path: "/",
            loader: () =>fetch('/data.json'),
            hydrateFallbackElement: <LoadingPage></LoadingPage>,
            element: <Home></Home>
        },
        // {
        //     path: "/login",
        //     element: <LoginPage></LoginPage>
        // },
        // {
        //     path: '/register',
        //     element: <Register></Register>
        // },
        {
            path: '/companies',
            loader: ()=>fetch('data.json'),
            hydrateFallbackElement: <LoadingPage></LoadingPage>,
            element: <Companies></Companies>
        }
    ]
  },
  {
    path: '/companyDetails/:id',
    loader: ()=>fetch('data.json'),
    hydrateFallbackElement: <LoadingPage></LoadingPage>,
    element: (
    <PrivateRoute>
      <CompanyDetails></CompanyDetails>
     </PrivateRoute>
     )
  },
  {
    path: "/auth",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/login',
        element:<LoginPage></LoginPage>
      },
      {
        path:'/auth/register',
        element:<Register></Register>
      },
    ]
  },
]);

export default router;