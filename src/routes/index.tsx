import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ScrollPage from "../pages/ScrollPage";
import BasicEffects from "../pages/BasicEffects";
import PulsingButton from "../pages/PulsingButton";
import BouncingLoader from "../pages/BouncingLoader";
import { FlippingCard } from "../pages/FlippingCard";
import { SpringEffects } from "../pages/SpringEffects";
import UseTransformEffects from "../pages/UseTransformEffects";
import WhileInView from "../pages/WhileInView/WhileInView";
import Example1 from "../pages/WhileInView/Example1";
import Example2 from "../pages/WhileInView/Example2";
import UseScrollExample2 from "../pages/UseScroll/Example2";
import UseScroll from "../pages/UseScroll/UseScroll";
import UseScrollExample3 from "../pages/UseScroll/Example3";
import ImageGallery from "../pages/ImageGallery";
import StraggerAnimation from "../pages/Stragger Animation/StraggerAnimation";
import StraggerAnimationExample1 from "../pages/Stragger Animation/Example1";
import StraggerAnimationExample2 from "../pages/Stragger Animation/Example2";
import MotionValueComponent from "../pages/useMotionValue/MotionValueComponent";
import UseMotionValueExample1 from "../pages/useMotionValue/Example1";
import UseMotionValueExample2 from "../pages/useMotionValue/Example2";
import UseMotionValueExample3 from "../pages/useMotionValue/Example3";
import ScrollIndicator from "../pages/ScrollIndicator";







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
        path:"/flipping-card",
        id:"Flipping Card",
        element:<FlippingCard />
    },
    {
        path:"/spring-hover-effect",
        id:"Spring Effects",
        element: <SpringEffects/>
    },
    {
        path:"/useTransform-effects",
        id:"Use Transform Effects",
        element: <UseTransformEffects/>
    },
    {
        path:"/whileInView",
        id:"While In View",
        element: <WhileInView/>,
        
    },
    {
        path:"/whileInView/example-1",
        id:"Example 1 - While In View",
        element:<Example1/>
    },
    {
        path:"/whileInView/example-2",
        id:"Example 2 - While In View",
        element:<Example2/>
    },
    {
        path:"/use-scroll",
        id:"Use Scroll",
        element:<UseScroll/>
    },
    {
        path:"/use-scroll/example-1",
        id:"Example 1 - Use Scroll",
        element:<UseScrollExample2/>
    },
    {
        path:"/use-scroll/example-2",
        id:"Example 2 - Use Scroll",
        element:<UseScrollExample3/>
    },
    {
        path:"/image-gallery",
        id:"Image Gallery",
        element:<ImageGallery/>
    },
    {
        path:"/stragger-animation",
        id:"Stragger Animation",
        element:<StraggerAnimation/>
    },
    {
        path:"/stragger-animation/example-1",
        id:"Example 1 - Stragger Animation",
        element:<StraggerAnimationExample1/>
    },
    {
        path:"/stragger-animation/example-2",
        id:"Example 2 - Stragger Animation",
        element:<StraggerAnimationExample2/>
    },
    {
        path:"/useMotionValue",
        id:"Use Motion Value",
        element:<MotionValueComponent/>
    },
    {
        path:"/useMotionValue/example-1",
        id:"Example 1 - Use Motion Value",
        element:<UseMotionValueExample1/>
    },
    {
        path:"/useMotionValue/example-2",
        id:"Example 2 - Use Motion Value",
        element:<UseMotionValueExample2/>
    },
    {
        path:"/useMotionValue/example-3",
        id:"Example 3 - Use Motion Value",
        element:<UseMotionValueExample3/>
    },
    {
        path:"scroll-indicator",
        id:"Scroll Indicator",
        element:<ScrollIndicator/>
    }
    

]);


export default router;