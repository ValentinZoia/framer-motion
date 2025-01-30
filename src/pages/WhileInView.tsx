
import AnimatedCard from '../components/whileInView/AnimatedCard'

const WhileInView = () => {
  return (
    <div>
      <h1 className="text-center text-3xl mb-4">
        Scroll Down to See the Animation
      </h1>
      <div className="h-screen" />
      <AnimatedCard />
    </div>
  )
}

export default WhileInView