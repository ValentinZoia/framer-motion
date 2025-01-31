
import router from '../../routes';
import { Link, Outlet } from 'react-router-dom';

const UseScroll = () => {
  const filterRoutes = router.routes
    .filter((r) => r.path?.includes("/use-scroll/example"))

  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
      <div className="flex gap-4">
        {filterRoutes.map((cr) => (
          <Link to={cr.path as string} key={cr.id}>
            <button className="px-4 py-2 bg-blue-500 rounded-md">
              {cr.id}
            </button>
          </Link>
        ))}
      </div>

      {/* Aquí se renderiza la ruta hija activa */}
      <Outlet />
    </div>
  );
}

export default UseScroll