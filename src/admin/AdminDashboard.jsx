import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminOrders } from "../State/Order/Action";
import { loadAdminProducts } from "../State/Product/Action";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const { orders, loading: ordersLoading } = useSelector((state) => state.order);
  const { adminProducts, adminLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getAdminOrders());
    dispatch(loadAdminProducts());
  }, [dispatch]);

  const metrics = [
    { label: "Products", value: adminProducts.length, loading: adminLoading },
    { label: "Orders", value: orders.length, loading: ordersLoading },
  ];

  return (
    <section>
      <div className="mb-7 border-b border-gray-200 pb-5">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <p className="mt-1 text-sm text-gray-600">Current catalog and order totals.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {metrics.map((metric) => (
          <div key={metric.label} className="border border-gray-200 bg-white p-5">
            <p className="text-sm font-medium text-gray-500">{metric.label}</p>
            <p className="mt-3 text-3xl font-semibold">{metric.loading ? "..." : metric.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}