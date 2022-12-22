import { createBrowserRouter } from "react-router-dom";
import About from "../components/Home/About/About";
import Blog from "../components/Home/Blog/Blog";
import Contact from "../components/Home/Contact/Contact";
import Home from "../components/Home/Home/Home";
import AllProject from "../components/Home/Portfolio/AllProject";
import Brigate from "../components/Home/Portfolio/Brigate/Brigate";
import CleanMan from "../components/Home/Portfolio/CleanMan/CleanMan";
import Doctechnical from "../components/Home/Portfolio/Doctechnical/Doctechnical";
import OldBazaar from "../components/Home/Portfolio/OldBazaar/OldBazaar";
import Portfolio from "../components/Home/Portfolio/Portfolio";
import Quizzy from "../components/Home/Portfolio/Quizzy/Quizzy";
import Resume from "../components/Home/Resume/Resume";
import ThanksPage from "../components/Home/ThanksPage/ThanksPage";
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
                path: '/thankspage',
                element: <ThanksPage></ThanksPage>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
            },
            {
                path: '/olbazarDetails',
                element: <OldBazaar></OldBazaar>
            },
            {
                path: '/cleanmanDetails',
                element: <CleanMan></CleanMan>
            },
            {
                path: '/doctechnicalDetails',
                element: <Doctechnical></Doctechnical>
            },
            {
                path: '/brigateDetails',
                element: <Brigate></Brigate>
            },
            {
                path: '/quizzyDetails',
                element: <Quizzy></Quizzy>
            },
        ]
    }
])
export default router;