
import { Link } from "react-router-dom";
import router from "../routes";


export default function HomePage() {
  const filterRoutes = router.routes.map((r) => r).filter((r)=>r.path !== "/" && !(r.path?.match(/.*\/.*\//)));
  
  return (
    <div className="py-4 w-full bg-gray-800 h-screen flex flex-col flex-wrap gap-4 items-center justify-center">
      {filterRoutes.map((r) => (
        
          <Link
            to={r.path as string}
            key={r.id}>
              <button className="px-4 py-2 bg-blue-500 rounded-md">
                {r.id}
              </button>
              
              
            </Link>
        
      ))}
    </div>
  )
}
