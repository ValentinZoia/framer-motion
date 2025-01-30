import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ScrollPage from "../pages/ScrollPage";
import BasicEffects from "../pages/BasicEffects";
import PulsingButton from "../pages/PulsingButton";
import BouncingLoader from "../pages/BouncingLoader";
import { FlippingCard } from "../pages/FlippingCard";
import { SpringEffects } from "../pages/SpringEffects";



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

    },
    {
        path:"/bouncing-loader",
        id:"Bouncing Loader",
        element: <BouncingLoader/>
    },
    {
        path:"flipping-card",
        id:"Flipping Card",
        element:<FlippingCard />
    },
    {
        path:"/spring-hover-effect",
        id:"Spring Effects",
        element: <SpringEffects/>
    }
]);


export default router;