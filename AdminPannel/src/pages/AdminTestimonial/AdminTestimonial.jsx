import React, { useState, useEffect } from "react";
import {
  FaTrash,
  FaEdit,
  FaStar,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import API, { IMAGE_URL } from "../../api/axios";

const AdminTestimonial = () => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    designation: "",
    company: "",
    message: "",
    rating: 5,
    status: "published",
    image: null,
    preview: "",
  });

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const res = await API.get("/testimonials");
    setItems(res.data.data || []);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setForm({
      ...form,
      image: file,
      preview: URL.createObjectURL(file),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (form[key]) formData.append(key, form[key]);
    });

    if (editId) {
      await API.put(`/testimonials/${editId}`, formData);
    } else {
      await API.post("/testimonials", formData);
    }

    fetchTestimonials();
    resetForm();
  };

  const resetForm = () => {
    setForm({
      name: "",
      designation: "",
      company: "",
      message: "",
      rating: 5,
      status: "published",
      image: null,
      preview: "",
    });
    setEditId(null);
  };

  const deleteItem = async (id) => {
    await API.delete(`/testimonials/${id}`);
    fetchTestimonials();
  };

  const toggleStatus = async (id) => {
    await API.patch(`/testimonials/toggle/${id}`);
    fetchTestimonials();
  };

  const handleEdit = (item) => {
    setEditId(item._id);
    setForm({
      ...item,
      preview: item.image ? `${IMAGE_URL}${item.image}` : "",
      image: null,
    });
  };

  return (
    <div className="h-screen overflow-hidden p-4 sm:p-6 lg:p-10">

      {/* RESPONSIVE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 h-full">

        {/* ================= LEFT FORM ================= */}
        <div className="bg-white p-6 rounded-xl shadow flex flex-col h-full overflow-y-scroll">

          <h2 className="text-xl font-semibold mb-6 shrink-0">
            {editId ? "Edit Testimonial" : "Add Testimonial"}
          </h2>

          <div className="flex-1 overflow-y-auto pr-2">

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="border p-3 w-full rounded"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Designation</label>
                <input
                  name="designation"
                  value={form.designation}
                  onChange={handleChange}
                  className="border p-3 w-full rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Company</label>
                <input
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="border p-3 w-full rounded"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="border p-3 w-full rounded"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Rating</label>
                <div className="flex gap-2 text-yellow-500 text-xl">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <FaStar
                      key={num}
                      className={`cursor-pointer ${
                        form.rating >= num ? "text-yellow-500" : "text-gray-300"
                      }`}
                      onClick={() => setForm({ ...form, rating: num })}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="border p-3 w-full rounded"
                >
                  <option value="published">Published</option>
                  <option value="draft">Unpublished</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Profile Image</label>
                <input type="file" onChange={handleImage} />
                {form.preview && (
                  <img
                    src={form.preview}
                    className="w-20 h-20 mt-3 rounded-full object-cover"
                  />
                )}
              </div>

              <button className="bg-blue-600 text-white p-3 w-full rounded">
                {editId ? "Update Testimonial" : "Add Testimonial"}
              </button>

            </form>
          </div>
        </div>

        {/* ================= RIGHT LIST ================= */}
        <div className="bg-white p-6 rounded-xl shadow flex flex-col h-full overflow-y-scroll">

          <h2 className="text-xl font-semibold mb-6 shrink-0">
            Testimonials View
          </h2>

          <div className="flex-1 overflow-y-auto pr-2">

            {items.map((item) => (
              <div key={item._id} className="border p-4 mb-4 rounded-lg">

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <img
                    src={
                      item.image
                        ? `${IMAGE_URL}${item.image}`
                        : "https://via.placeholder.com/100"
                    }
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">
                      {item.designation} {item.company && `• ${item.company}`}
                    </p>

                    <div className="flex text-yellow-500 text-sm mt-1">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <p className="text-xs mt-1">
                      Status:{" "}
                      <span
                        className={
                          item.status === "published"
                            ? "text-green-600"
                            : "text-red-500"
                        }
                      >
                        {item.status}
                      </span>
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-3">
                  {item.message}
                </p>

                <div className="flex gap-4 mt-4 text-lg flex-wrap">
                  <button onClick={() => handleEdit(item)} className="text-blue-600">
                    <FaEdit />
                  </button>

                  <button
                    onClick={() => toggleStatus(item._id)}
                    className="text-purple-600"
                  >
                    {item.status === "published" ? <FaEyeSlash /> : <FaEye />}
                  </button>

                  <button
                    onClick={() => deleteItem(item._id)}
                    className="text-red-600"
                  >
                    <FaTrash />
                  </button>
                </div>

              </div>
            ))}

            {!items.length && (
              <p className="text-gray-400 text-center">
                No testimonials added yet.
              </p>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminTestimonial;