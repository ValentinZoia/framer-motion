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
import DraggableCards from "../pages/DraggableCards";
import Carousel from "../pages/Carousel";
import AnimationNavigation from "../pages/AnimationNavigation";
import ScrollAnimation from "../pages/ScrollAnimation";
import HorizontalScroll from "../pages/HorizontalScroll";
import StickyNav from "../pages/StickyNavbar";
import ProgressSteps from "../pages/ProgressStemps";
import AnimatedLogoCloud from "../pages/AnimatedLogoCloud";
import TextAnimations from "../pages/Text Animations/TextAnimations";
import RevealLinks from "../pages/Text Animations/RevealLinks";
import TextReveal from "../pages/Text Animations/TextReveal";







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
    },
    {
        path:"/draggable-cards",
        id:"Draggable Cards",
        element:<DraggableCards />
    },
    {
        path:"/carousel",
        id:"Carousel",
        element:<Carousel/>
    },
    {
        path:"/animation-navigation",
        id:"Animation Navigation",
        element:<AnimationNavigation />
    },
    {
        path:"/scroll-animation",
        id:"Scroll Animation",
        element:<ScrollAnimation />
    },
    {
        path:"/horizontal-scroll",
        id:"Horizontal Scroll",
        element:<HorizontalScroll />
    },
    {
        path:"/sticky-navbar",
        id:"Sticky Navbar",
        element:<StickyNav />
    },
    {
        path:"/progress-steps",
        id:"Progress Steps",
        element:<ProgressSteps />
    },
    {
        path:"/animation-logo-cloud",
        id:"Animation Logo Cloud",
        element:<AnimatedLogoCloud />
    },
    {
        path:"/text-animations",
        id:"Text Animations",
        element:<TextAnimations />
    },
    {
        path:"/text-animations/reveal-links",
        id:"Reveal Links",
        element:<RevealLinks />
    },
    {
        path:"/text-animations/text-reveal-effect",
        id:"Text Reveal Effect",
        element:<TextReveal />
    }
    

]);


export default router;