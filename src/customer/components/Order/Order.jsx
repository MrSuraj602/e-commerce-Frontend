import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../../../State/Order/Action";
import OrderCard from "./OrderCard";

const Order = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  useEffect(() => {
    dispatch(getOrderHistory());
  }, [dispatch]);

  const statuses = [...new Set(orders.map((order) => order.orderStatus).filter(Boolean))];
  const visibleOrders = selectedStatuses.length === 0
    ? orders
    : orders.filter((order) => selectedStatuses.includes(order.orderStatus));

  const toggleStatus = (status) => {
    setSelectedStatuses((current) => current.includes(status)
      ? current.filter((value) => value !== status)
      : [...current, status]);
  };

  return (
    <div className="mx-auto mt-8 grid w-[94%] max-w-7xl gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
      <aside className="h-fit border border-gray-200 bg-white p-5">
        <h1 className="text-lg font-semibold">Order status</h1>
        <div className="mt-5 space-y-3">
          {statuses.map((status) => (
            <label key={status} className="flex items-center gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={selectedStatuses.includes(status)}
                onChange={() => toggleStatus(status)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600"
              />
              {status.replaceAll("_", " ")}
            </label>
          ))}
          {statuses.length === 0 && <p className="text-sm text-gray-500">Statuses appear when you have orders.</p>}
        </div>
      </aside>

      <section aria-label="Your orders" className="min-w-0 space-y-4">
        {error && <p role="alert" className="border border-red-200 bg-red-50 p-3 text-sm text-red-800">{error}</p>}
        {loading && orders.length === 0 && <p className="py-8 text-center text-sm text-gray-500">Loading orders...</p>}
        {!loading && visibleOrders.length === 0 && <p className="border border-gray-200 bg-white p-8 text-center text-sm text-gray-500">No orders found.</p>}
        {visibleOrders.map((order) => <OrderCard key={order.id} order={order} />)}
      </section>
    </div>
  );
};

export default Order;
