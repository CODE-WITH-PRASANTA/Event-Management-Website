import React, { useEffect, useState } from "react";
import API from "../../api/axios";

export default function AdminPlanManager() {
  const [plans, setPlans] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    originalPrice: "",
    price: "",
    duration: "Per Month",
    features: [],
    highlight: false,
    isActive: true,
  });

  const [featureInput, setFeatureInput] = useState("");

  /* ================= FETCH ================= */
  const fetchPlans = async () => {
    const res = await API.get("/plans");
    setPlans(res.data.data || []);
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /* ================= ADD FEATURE ================= */
  const addFeature = () => {
    if (!featureInput.trim()) return;

    setForm({
      ...form,
      features: [...form.features, featureInput],
    });

    setFeatureInput("");
  };

  /* ================= REMOVE FEATURE ================= */
  const removeFeature = (index) => {
    const updated = form.features.filter((_, i) => i !== index);
    setForm({ ...form, features: updated });
  };

  /* ================= CALCULATE DISCOUNT ================= */
  const calculateDiscount = () => {
    if (!form.originalPrice || !form.price) return 0;
    const discount =
      ((form.originalPrice - form.price) / form.originalPrice) * 100;
    return Math.round(discount);
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      ...form,
      originalPrice: Number(form.originalPrice),
      price: Number(form.price),
    };

    if (editId) {
      await API.put(`/plans/${editId}`, formattedData);
      setEditId(null);
    } else {
      await API.post("/plans", formattedData);
    }

    fetchPlans();

    setForm({
      title: "",
      originalPrice: "",
      price: "",
      duration: "Per Month",
      features: [],
      highlight: false,
      isActive: true,
    });
  };

  /* ================= EDIT ================= */
  const handleEdit = (plan) => {
    setEditId(plan._id);
    setForm({
      ...plan,
      features: plan.features || [],
    });
  };

  /* ================= TOGGLE ACTIVE ================= */
  const toggleActive = async (plan) => {
    await API.put(`/plans/${plan._id}`, {
      isActive: !plan.isActive,
    });
    fetchPlans();
  };

  return (
    <div className="p-6 grid md:grid-cols-2 gap-6">
      {/* ================= LEFT FORM ================= */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-3">
          {editId ? "Update Plan" : "Add Plan"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Plan Title"
            className="w-full p-2 border rounded"
          />

          <input
            name="originalPrice"
            value={form.originalPrice}
            onChange={handleChange}
            placeholder="Original Price"
            className="w-full p-2 border rounded"
          />

          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Discounted Price"
            className="w-full p-2 border rounded"
          />

          {/* FEATURE INPUT */}
          <div className="flex gap-2">
            <input
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              placeholder="Enter feature"
              className="flex-1 p-2 border rounded"
            />
            <button
              type="button"
              onClick={addFeature}
              className="bg-green-600 text-white px-3 rounded"
            >
              Add
            </button>
          </div>

          {/* FEATURE LIST */}
          <ul className="space-y-1">
            {form.features.map((f, i) => (
              <li
                key={i}
                className="flex justify-between bg-gray-100 p-2 rounded"
              >
                ✓ {f}
                <button
                  type="button"
                  onClick={() => removeFeature(i)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              name="highlight"
              checked={form.highlight}
              onChange={handleChange}
            />
            Highlight Plan
          </label>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            {editId ? "Update Plan" : "Add Plan"}
          </button>
        </form>

        {/* PLAN LIST */}
        <div className="mt-6 space-y-3">
          {plans.map((plan) => (
            <div key={plan._id} className="p-3 border rounded">
              <div className="flex justify-between">
                <span>{plan.title}</span>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleEdit(plan)}
                    className="text-blue-500 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => toggleActive(plan)}
                    className={`text-sm ${
                      plan.isActive ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {plan.isActive ? "Active" : "Inactive"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= RIGHT LIVE VIEW ================= */}
      <div className="bg-gray-100 p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Live Preview</h3>

        <div
          className={`p-6 rounded-xl ${
            form.highlight ? "bg-blue-600 text-white" : "bg-white"
          }`}
        >
          <h2 className="text-xl font-bold">{form.title || "Plan Title"}</h2>

          {form.originalPrice && (
            <p className="line-through text-sm">
              ${form.originalPrice}
            </p>
          )}

          <p className="text-2xl font-bold">
            ${form.price || "0"}
          </p>

          {calculateDiscount() > 0 && (
            <p className="text-sm">
              {calculateDiscount()}% OFF
            </p>
          )}

          <ul className="mt-4 space-y-1 text-sm">
            {form.features.map((f, i) => (
              <li key={i}>✓ {f}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}