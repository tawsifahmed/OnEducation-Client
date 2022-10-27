import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home/Home";
import LeftSideNav from "../../Pages/Shared/LeftSideNav/LeftSideNav";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course/:id',
                element: <Course></Course>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/courses',
                element: <LeftSideNav></LeftSideNav>
            }
        ]
    }

])