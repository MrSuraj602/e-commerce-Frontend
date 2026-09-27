import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAdminProduct, deleteAdminProduct, loadAdminProducts, updateAdminProduct } from "../State/Product/Action";

const emptyForm = {
  title: "",
  description: "",
  price: "",
  discountPrice: "",
  discountPercent: "",
  quantity: "",
  brand: "",
  color: "",
  imageUrl: "",
  topLevelCategory: "",
  secondLevelCategory: "",
  thirdLevelCategory: "",
  sizeNames: "S, M, L",
  sizeQuantity: "0",
};

const fields = [
  ["title", "Title"],
  ["description", "Description"],
  ["brand", "Brand"],
  ["color", "Color"],
  ["imageUrl", "Image URL"],
  ["price", "Price"],
  ["discountPrice", "Discounted price"],
  ["discountPercent", "Discount percent"],
  ["quantity", "Inventory quantity"],
  ["topLevelCategory", "Top-level category"],
  ["secondLevelCategory", "Second-level category"],
  ["thirdLevelCategory", "Third-level category"],
  ["sizeNames", "Sizes, comma-separated"],
  ["sizeQuantity", "Quantity per listed size"],
];

const numberFields = new Set(["price", "discountPrice", "discountPercent", "quantity", "sizeQuantity"]);

function productForm(product) {
  const firstSize = product.sizes?.[0];
  return {
    ...emptyForm,
    title: product.title || "",
    description: product.description || "",
    brand: product.brand || "",
    color: product.color || "",
    imageUrl: product.imageUrl || "",
    price: String(product.price ?? ""),
    discountPrice: String(product.discountedPrice ?? ""),
    discountPercent: String(product.discountPercent ?? ""),
    quantity: String(product.quantity ?? ""),
    sizeNames: product.sizes?.map((size) => size.name).join(", ") || "",
    sizeQuantity: String(firstSize?.quantity ?? 0),
  };
}

function toSizeList(form) {
  return form.sizeNames.split(",").map((name) => name.trim()).filter(Boolean)
    .map((name) => ({ name, quantity: Number(form.sizeQuantity) || 0 }));
}

function ProductFields({ form, onChange }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {fields.map(([name, label]) => (
        <label key={name} className="grid gap-1.5 text-sm font-medium text-gray-700">
          {label}
          <input
            required={name === "title" || name === "price" || name === "discountPrice" || name === "quantity"}
            name={name}
            type={numberFields.has(name) ? "number" : "text"}
            min={numberFields.has(name) ? "0" : undefined}
            value={form[name]}
            onChange={onChange}
            className="min-w-0 rounded border border-gray-300 bg-white px-3 py-2 text-sm font-normal outline-none focus:border-gray-700"
          />
        </label>
      ))}
    </div>
  );
}

export default function AdminProducts() {
  const dispatch = useDispatch();
  const { adminProducts, adminLoading, adminMutating, adminError } = useSelector((state) => state.product);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    dispatch(loadAdminProducts());
  }, [dispatch]);

  const changeField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const beginEdit = (product) => {
    setEditing(product);
    setForm(productForm(product));
    setNotice("");
  };

  const resetForm = () => {
    setEditing(null);
    setForm(emptyForm);
  };

  const saveProduct = async (event) => {
    event.preventDefault();
    setNotice("");
    const sizes = toSizeList(form);
    const values = {
      title: form.title,
      description: form.description,
      price: Number(form.price),
      brand: form.brand,
      color: form.color,
      imageUrl: form.imageUrl,
      quantity: Number(form.quantity),
    };

    let saved;
    if (editing) {
      saved = await dispatch(updateAdminProduct(editing.id, {
        ...values,
        discountedPrice: Number(form.discountPrice),
        discountPercent: Number(form.discountPercent),
        sizes,
        category: editing.category,
      }));
    } else {
      saved = await dispatch(createAdminProduct({
        ...values,
        discountPrice: Number(form.discountPrice),
        discountPersent: Number(form.discountPercent),
        size: sizes,
        topLevelCategory: form.topLevelCategory,
        secondLevelCategory: form.secondLevelCategory,
        thirdLevelCategory: form.thirdLevelCategory,
      }));
    }

    if (saved) {
      setNotice(editing ? "Product updated." : "Product added.");
      resetForm();
    }
  };

  const removeProduct = async (product) => {
    if (!window.confirm(`Delete ${product.title}?`)) return;
    setNotice("");
    const deleted = await dispatch(deleteAdminProduct(product.id));
    if (deleted) setNotice("Product deleted.");
  };

  return (
    <section>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-gray-200 pb-5">
        <div>
          <h2 className="text-2xl font-semibold">Products</h2>
          <p className="mt-1 text-sm text-gray-600">Create, edit, and remove catalog products.</p>
        </div>
        <button onClick={resetForm} className="rounded border border-gray-300 bg-white px-3 py-2 text-sm font-medium hover:bg-gray-100">
          Add product
        </button>
      </div>

      <form onSubmit={saveProduct} className="mb-8 border border-gray-200 bg-white p-5">
        <div className="mb-5 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">{editing ? `Edit product #${editing.id}` : "New product"}</h3>
          {editing && <button type="button" onClick={resetForm} className="text-sm text-gray-600 underline">Cancel edit</button>}
        </div>
        <ProductFields form={form} onChange={changeField} />
        {adminError && <p role="alert" className="mt-4 text-sm text-red-700">{adminError}</p>}
        {notice && <p role="status" className="mt-4 text-sm text-green-700">{notice}</p>}
        <button disabled={adminMutating} className="mt-5 rounded bg-gray-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-50">
          {adminMutating ? "Saving..." : editing ? "Save changes" : "Create product"}
        </button>
      </form>

      <div className="overflow-x-auto border border-gray-200 bg-white">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead className="bg-gray-100 text-xs uppercase text-gray-600">
            <tr><th className="px-4 py-3">Product</th><th className="px-4 py-3">Brand</th><th className="px-4 py-3">Price</th><th className="px-4 py-3">Stock</th><th className="px-4 py-3">Actions</th></tr>
          </thead>
          <tbody>
            {adminProducts.map((product) => (
              <tr key={product.id} className="border-t border-gray-200">
                <td className="px-4 py-3"><span className="font-medium">{product.title}</span><span className="ml-2 text-xs text-gray-500">#{product.id}</span></td>
                <td className="px-4 py-3">{product.brand}</td>
                <td className="px-4 py-3">{product.discountedPrice}</td>
                <td className="px-4 py-3">{product.quantity}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button onClick={() => beginEdit(product)} className="rounded border border-gray-300 px-2.5 py-1.5 hover:bg-gray-100">Edit</button>
                    <button onClick={() => removeProduct(product)} className="rounded border border-red-200 px-2.5 py-1.5 text-red-700 hover:bg-red-50">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
            {!adminLoading && adminProducts.length === 0 && <tr><td colSpan="5" className="px-4 py-8 text-center text-gray-500">No products found.</td></tr>}
            {adminLoading && <tr><td colSpan="5" className="px-4 py-8 text-center text-gray-500">Loading products...</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}