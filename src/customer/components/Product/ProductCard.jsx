import "./ProductCard.css";
function ProductCard({product}) {
  return (
    <div className="productCard w-[15rem] transition-all cursor-pointer ">
        <div className="h-[20rem] ">
            <img className="h-full w-full object-cover object-left-top" src={product.imageUrl} alt="" />
        </div>
        <div className="textPart bg-white p-3">
            <div>
                <p className="font-bold opacity-60">{product.brand}</p>
                <p className="font-semibold text-gray-600">{product.title}</p>
                <p className="font-semibold opacity-50">{product.color}</p>
            </div>
            <div className="font-semibold opacity-50 flex items-center space-x-2">
                <p className="text-lg font-bold">₹{product.discountedPrice.toFixed(2)}</p>
                <p className="line-through opacity-50">₹{product.price.toFixed(2)}</p>
                <p className="text-green-600">{product.discountPersent}% off</p>
            </div>
        </div>
    </div>
  );
};

export default ProductCard;