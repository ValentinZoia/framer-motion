
import { Link } from "react-router-dom";
import router from "../routes";


export default function HomePage() {
  const filterRoutes = router.routes.map((r) => r).filter((r)=>r.path !== "/");
  
  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
      {filterRoutes.map((r) => (
        <button className="px-4 py-2 bg-blue-500 rounded-md">
          <Link
            to={r.path as string}
            key={r.id}>
              {r.id}
            </Link>
        </button>
      ))}
    </div>
  )
}
