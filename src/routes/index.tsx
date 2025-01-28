import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ScrollPage from "../pages/ScrollPage";
import BasicEffects from "../pages/BasicEffects";



const router = createBrowserRouter([
    {
        path:"/",
        element: <HomePage/>
    },
    {
        path:"/scroll-effect",
        element: <ScrollPage/>
    },
    {
        path:"/basics-effects",
        element: <BasicEffects/>
    }
]);


export default router;