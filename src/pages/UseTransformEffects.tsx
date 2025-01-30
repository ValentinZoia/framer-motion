
import DragEffectUseTransform from "../components/useTransform/DragEffectUseTransform";
import ScrollEffectUseTransform from "../components/useTransform/ScrollEffectUseTransform";

const UseTransformEffects = () => {
   return(
    <div className="w-full h-[120vh] flex flex-col gap-8 items-center justify-start m-64 ">
      <DragEffectUseTransform />
      <ScrollEffectUseTransform />

    </div>
   )
}

export default UseTransformEffects