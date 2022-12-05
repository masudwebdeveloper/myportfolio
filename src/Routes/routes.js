import { createBrowserRouter } from "react-router-dom";
import About from "../components/Home/About/About";
import Contact from "../components/Home/Contact/Contact";
import Home from "../components/Home/Home/Home";
import AllProject from "../components/Home/Portfolio/AllProject";
import Portfolio from "../components/Home/Portfolio/Portfolio";
import Resume from "../components/Home/Resume/Resume";
import Main from "../layouts/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/resume',
                element: <Resume></Resume>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/portfolio',
                element: <Portfolio></Portfolio>,
                children: [
                    {
                        path: '/portfolio',
                        element: <AllProject></AllProject>
                    }
                ]
            }
        ]
    }
])
export default router;