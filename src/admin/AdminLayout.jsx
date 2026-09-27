import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../State/Auth/Action";

const navigation = [
  { label: "Dashboard", to: "/admin", end: true },
  { label: "Products", to: "/admin/products" },
  { label: "Orders", to: "/admin/orders" },
];

export default function AdminLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Store operations</p>
            <h1 className="text-xl font-semibold">Admin panel</h1>
          </div>
          <nav aria-label="Admin navigation" className="flex flex-wrap items-center gap-2">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => `rounded px-3 py-2 text-sm font-medium ${isActive ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}
              >
                {item.label}
              </NavLink>
            ))}
            <button onClick={handleLogout} className="ml-2 rounded border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
              Sign out
            </button>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-5 py-8">
        <Outlet />
      </main>
    </div>
  );
}