import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ScrollPage from "../pages/ScrollPage";
import BasicEffects from "../pages/BasicEffects";
import PulsingButton from "../pages/PulsingButton";



const router = createBrowserRouter([
    {
        path:"/",
        id:"home",
        element: <HomePage/>
    },
    {
        path:"/scroll-effect",
        element: <ScrollPage/>,
        id:"Scroll Page",
    },
    {
        path:"/basics-effects",
        id:"Basics Effects",
        element: <BasicEffects/>
    },
    {
        path:"/pulsing-button",
        id:"Pulsing Button",
        element: <PulsingButton/>

    }
]);


export default router;