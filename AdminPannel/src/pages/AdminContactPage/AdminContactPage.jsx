import React, { useEffect, useState } from "react";
import API from "../../api/axios";
import { FiPhone, FiMail, FiMapPin, FiGlobe } from "react-icons/fi";

export default function AdminContactPage() {
  const [form, setForm] = useState({
    phone: "",
    email: "",
    office: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);

  /* ================= FETCH CONTACT ================= */
  const fetchContact = async () => {
    try {
      const res = await API.get("/contact");
      if (res.data.data) {
        setForm(res.data.data);
      }
    } catch (err) {
      console.error("FETCH ERROR:", err);
    }
  };

  useEffect(() => {
    fetchContact();
  }, []);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= SAVE ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await API.post("/contact", form);
      alert("Contact Saved Successfully");
    } catch (err) {
      console.error("SAVE ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Contact Management</h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* ================= FORM ================= */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Edit Contact Info</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            <textarea
              name="office"
              value={form.office}
              onChange={handleChange}
              placeholder="Office Address"
              rows="3"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            <input
              name="website"
              value={form.website}
              onChange={handleChange}
              placeholder="Website"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {loading ? "Saving..." : "Save Contact"}
            </button>
          </form>
        </div>

        {/* ================= PREVIEW ================= */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold mb-4">Live Preview</h3>

          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FiPhone className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">PHONE</p>
                <p className="font-medium">{form.phone || "Not Added"}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FiMail className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">EMAIL</p>
                <p className="font-medium">{form.email || "Not Added"}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FiMapPin className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">OFFICE</p>
                <p className="font-medium">{form.office || "Not Added"}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FiGlobe className="text-blue-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500">WEBSITE</p>
                <p className="font-medium">{form.website || "Not Added"}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}