import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminOrders, updateAdminOrderStatus } from "../State/Order/Action";

const statusActions = {
  PENDING: [{ label: "Confirm", status: "CONFIRMED" }],
  PLACED: [{ label: "Confirm", status: "CONFIRMED" }],
  CONFIRMED: [{ label: "Mark shipped", status: "SHIPPED" }],
  SHIPPED: [{ label: "Mark delivered", status: "DELIVERED" }],
  DELIVERED: [],
  CANCELLED: [],
};

export default function AdminOrders() {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);
  const [selectedId, setSelectedId] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    dispatch(getAdminOrders());
  }, [dispatch]);

  const changeStatus = async (order, status) => {
    setUpdatingId(order.id);
    setNotice("");
    const updated = await dispatch(updateAdminOrderStatus(order.id, status));
    setUpdatingId(null);
    if (updated) setNotice(`Order #${order.id} is now ${updated.orderStatus}.`);
  };

  const toggleDetails = (orderId) => setSelectedId((current) => current === orderId ? null : orderId);

  return (
    <section>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-gray-200 pb-5">
        <div>
          <h2 className="text-2xl font-semibold">Orders</h2>
          <p className="mt-1 text-sm text-gray-600">Review customer orders and advance fulfillment status.</p>
        </div>
        <button onClick={() => dispatch(getAdminOrders())} className="rounded border border-gray-300 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-100">Refresh</button>
      </div>
      {error && <p role="alert" className="mb-4 text-sm text-red-700">{error}</p>}
      {notice && <p role="status" className="mb-4 text-sm text-green-700">{notice}</p>}
      <div className="overflow-x-auto border border-gray-200 bg-white">
        <table className="w-full min-w-212.5 border-collapse text-left text-sm">
          <thead className="bg-gray-100 text-xs uppercase text-gray-600">
            <tr><th className="px-4 py-3">Order</th><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Placed</th><th className="px-4 py-3">Total</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Actions</th></tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t border-gray-200 align-top">
                <td className="px-4 py-3">
                  <button onClick={() => toggleDetails(order.id)} className="font-semibold text-gray-900 underline">#{order.id}</button>
                  {selectedId === order.id && (
                    <div className="mt-3 min-w-64 space-y-2 text-xs text-gray-600">
                      {order.orderItems?.map((item) => <p key={item.id || `${item.product?.id}-${item.size}`}>{item.quantity} × {item.product?.title} · {item.size}</p>)}
                      <p>{order.shippingAddress?.streetAddress}, {order.shippingAddress?.city}, {order.shippingAddress?.state} {order.shippingAddress?.zipCode}</p>
                    </div>
                  )}
                </td>
                <td className="px-4 py-3">{order.user?.email || "—"}</td>
                <td className="px-4 py-3">{order.orderDate ? new Date(order.orderDate).toLocaleDateString() : "—"}</td>
                <td className="px-4 py-3">{order.totalPrice}</td>
                <td className="px-4 py-3"><span className="rounded bg-gray-100 px-2 py-1 text-xs font-semibold">{order.orderStatus}</span></td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    {(statusActions[order.orderStatus] || []).map((action) => (
                      <button key={action.status} disabled={updatingId === order.id} onClick={() => changeStatus(order, action.status)} className="rounded border border-gray-300 px-2.5 py-1.5 hover:bg-gray-100 disabled:opacity-50">{action.label}</button>
                    ))}
                    {!['DELIVERED', 'CANCELLED'].includes(order.orderStatus) && (
                      <button disabled={updatingId === order.id} onClick={() => changeStatus(order, "CANCELLED")} className="rounded border border-red-200 px-2.5 py-1.5 text-red-700 hover:bg-red-50 disabled:opacity-50">Cancel</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {!loading && orders.length === 0 && <tr><td colSpan="6" className="px-4 py-8 text-center text-gray-500">No orders found.</td></tr>}
            {loading && <tr><td colSpan="6" className="px-4 py-8 text-center text-gray-500">Loading orders...</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}