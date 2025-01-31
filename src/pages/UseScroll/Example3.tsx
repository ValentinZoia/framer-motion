import AnimationComponent from "../../components/useScroll/AnimationComponent"


const UseScrollExample3 = () => {
  return (
    <div>
      <AnimationComponent />
      <div className="h-[200vh] bg-gray-800 flex items-center justify-center">
        <h2 className="text-white">Scroll Down</h2>
      </div>
    </div>
  )
}

export default UseScrollExample3