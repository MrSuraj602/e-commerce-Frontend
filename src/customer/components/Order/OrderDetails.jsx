import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddressCard from "../AddressCard/AddressCard";
import { getOrderById } from "../../../State/Order/Action";
import OrderTracker from "./OrderTracker";

const OrderDetails = () => {
    const { orderId } = useParams();
    const dispatch = useDispatch();
    const { order, loading, error } = useSelector((state) => state.order);

    useEffect(() => {
        dispatch(getOrderById(orderId));
    }, [dispatch, orderId]);

    if (loading && !order) return <p className="px-5 py-12 text-center text-sm text-gray-500">Loading order...</p>;
    if (error && !order) return <p role="alert" className="px-5 py-12 text-center text-sm text-red-700">{error}</p>;
    if (!order) return null;

    return (
        <main className="mx-auto max-w-6xl px-5 py-8 lg:px-10">
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-gray-200 pb-5">
                <div>
                    <p className="text-sm text-gray-500">Order #{order.id}</p>
                    <h1 className="mt-1 text-2xl font-semibold">Order details</h1>
                </div>
                <p className="rounded bg-gray-100 px-3 py-2 text-sm font-semibold">Current status: {order.orderStatus}</p>
            </div>

            {order.orderStatus !== "CANCELLED" && <div className="py-10"><OrderTracker status={order.orderStatus} /></div>}
            {order.orderStatus === "CANCELLED" && <p className="mt-6 border border-red-200 bg-red-50 p-4 text-sm text-red-800">This order was cancelled.</p>}

            <section className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div>
                    <h2 className="mb-3 text-lg font-semibold">Items</h2>
                    <div className="divide-y divide-gray-200 border-y border-gray-200 bg-white">
                        {order.orderItems?.map((item) => (
                            <article key={item.id} className="flex flex-wrap items-center justify-between gap-4 py-4">
                                <div className="flex min-w-0 items-center gap-4">
                                    {item.product?.imageUrl && <img src={item.product.imageUrl} alt={item.product.title || "Ordered product"} className="h-16 w-16 border border-gray-200 object-cover" />}
                                    <div>
                                        <h3 className="font-medium">{item.product?.title}</h3>
                                        <p className="mt-1 text-sm text-gray-500">Size {item.size || "-"} | Quantity {item.quantity}</p>
                                    </div>
                                </div>
                                <p className="font-medium">INR {item.price}</p>
                            </article>
                        ))}
                        {(!order.orderItems || order.orderItems.length === 0) && <p className="py-6 text-sm text-gray-500">No order lines were returned.</p>}
                    </div>
                      <p className="mt-4 text-right text-lg font-semibold">Total INR {order.totalPrice}</p>
                </div>

                <aside>
                    <h2 className="mb-3 text-lg font-semibold">Delivery address</h2>
                    <div className="border border-gray-200 bg-white p-4">
                        <AddressCard address={order.shippingAddress} />
                    </div>
                </aside>
            </section>
        </main>
    );
};

export default OrderDetails;
