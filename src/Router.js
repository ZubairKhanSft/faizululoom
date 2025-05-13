//import { Home } from "@mui/icons-material";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";

import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Vision from "./Pages/Vision";
import Mission from "./Pages/Mission";
import Faculty from "./Pages/Faculty";
import DonateUs from "./Pages/DonateUs";
import Prac from "./Pages/Prac";
import Show from "./Component/Show";
import Create from "./Pages/Create";
import Landing from "./Pages/Landing";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import GalleryAll from "./Pages/GalleryAll";
const router = createBrowserRouter([

    
    {
        path: "/landing",
        element: <Landing/>
    },
    {
        path: "/",
        // element: <Home/>
        element: <Landing/>
    },
    {
        path: "/about",
        element:<AboutUsPage/>
    },
    {
        path: "/gallery",
        element:<GalleryAll/>
    },
    {
        path: "/contact",
        element:<ContactUsPage/>
    },
    {
        path: "/vision",
        element:<Vision/>
    },
    {
        path: "/mission",
        element:<Mission/>
    },
    {
        path: "/faculty",
        element:<Faculty/>
    },
    {
        path: "/donate",
        element:<DonateUs/>
    },
    {
        path: "/practice",
        element:<Prac/>
    },
    {
        path: "/show/:id",
        element:<Show/>
    },
    {
        path: "/create",
        element:<Create/>
    }
    
    
]);

export default router;