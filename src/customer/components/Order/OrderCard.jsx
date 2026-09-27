import { useNavigate } from "react-router-dom";

const OrderCard = ({ order }) => {
    const navigate = useNavigate();
    const firstItem = order.orderItems?.[0];
    const remainingItems = Math.max(0, (order.orderItems?.length || 0) - 1);

    return (
        <article className="border border-gray-200 bg-white p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3 text-sm">
                <span className="font-semibold text-gray-900">Order #{order.id}</span>
                <span className="rounded bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700">
                    {order.orderStatus?.replaceAll("_", " ") || "Status unavailable"}
                </span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-5">
                <div className="flex min-w-0 items-center gap-4">
                    {firstItem?.product?.imageUrl && (
                        <img src={firstItem.product.imageUrl} alt={firstItem.product.title || "Ordered product"} className="h-16 w-16 shrink-0 border border-gray-200 object-cover" />
                    )}
                    <div className="min-w-0">
                        <p className="truncate font-semibold text-gray-900">{firstItem?.product?.title || "Order items"}</p>
                        <p className="mt-1 text-sm text-gray-500">
                            {firstItem ? `${firstItem.quantity} × ${firstItem.size || "Standard size"}` : `${order.totalItem || 0} items`}
                            {remainingItems > 0 ? ` · +${remainingItems} more` : ""}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">{order.orderDate ? new Date(order.orderDate).toLocaleDateString() : ""}</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                      <span className="font-semibold">INR {order.totalPrice}</span>
                    <button onClick={() => navigate(`/account/order/${order.id}`)} className="rounded border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50">
                        Details
                    </button>
                </div>
            </div>
        </article>
    );
};

export default OrderCard;
