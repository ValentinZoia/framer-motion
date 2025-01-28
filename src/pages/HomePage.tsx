
import { Link } from "react-router-dom";
import router from "../routes";


export default function HomePage() {
  const filterRoutes = router.routes.map((r) => r.path).filter((r)=>r !== "/");
  
  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
      {filterRoutes.map((r) => (
        <button className="px-4 py-2 bg-blue-500 rounded-md">
          <Link
            to={r as string}
            key={r}>
              {r}
            </Link>
        </button>
      ))}
    </div>
  )
}
