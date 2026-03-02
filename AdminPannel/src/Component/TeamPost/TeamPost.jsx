import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTrash } from "react-icons/fa";
import API, { IMAGE_URL } from "../../api/axios";

const TeamAdmin = () => {
  const [members, setMembers] = useState([]);

  const [form, setForm] = useState({
    name: "",
    role: "",
    bio: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    image: null,
    preview: "",
  });

  /* ================= FETCH TEAM ================= */
  useEffect(() => {
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      const res = await API.get("/team");
      setMembers(res.data.data || []);
    } catch (err) {
      console.error("FETCH ERROR:", err);
    }
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

  /* ================= ADD MEMBER ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("role", form.role);
      formData.append("bio", form.bio);
      formData.append("facebook", form.facebook);
      formData.append("instagram", form.instagram);
      formData.append("linkedin", form.linkedin);

      if (form.image) {
        formData.append("image", form.image);
      }

      await API.post("/team", formData);

      fetchMembers();

      setForm({
        name: "",
        role: "",
        bio: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        image: null,
        preview: "",
      });

    } catch (err) {
      console.error("ADD ERROR:", err);
    }
  };

  /* ================= DELETE MEMBER ================= */
  const removeMember = async (id) => {
    try {
      await API.delete(`/team/${id}`);
      fetchMembers();
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 grid lg:grid-cols-2 gap-10">

      {/* ================= LEFT PANEL ================= */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col h-[600px]">

        <h2 className="text-2xl font-semibold mb-6 shrink-0">
          Team Admin Panel
        </h2>

        <div className="flex-1 overflow-y-auto pr-2">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="border p-3 rounded w-full"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Designation</label>
              <input
                name="role"
                value={form.role}
                onChange={handleChange}
                className="border p-3 rounded w-full"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Short Bio</label>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Profile Image</label>
              <label className="border-2 border-dashed rounded p-6 block text-center cursor-pointer">
                {form.preview ? (
                  <img
                    src={form.preview}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                ) : (
                  <p className="text-gray-500">Click to choose image</p>
                )}
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImage}
                />
              </label>
            </div>

            <div>
              <label className="block mb-1 font-medium">Facebook URL</label>
              <input
                name="facebook"
                value={form.facebook}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Instagram URL</label>
              <input
                name="instagram"
                value={form.instagram}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">LinkedIn URL</label>
              <input
                name="linkedin"
                value={form.linkedin}
                onChange={handleChange}
                className="border p-3 rounded w-full"
              />
            </div>

            <button className="bg-blue-600 text-white py-3 rounded w-full hover:bg-blue-700">
              Add Team Member
            </button>

          </form>
        </div>
      </div>

      {/* ================= RIGHT PANEL ================= */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-col h-[600px]">

        <h2 className="text-2xl font-semibold mb-6 shrink-0">
          Manage Team Members
        </h2>

        <div className="flex-1 overflow-y-auto pr-2">

          <table className="w-full text-sm">
            <thead className="bg-gray-100 sticky top-0">
              <tr>
                <th className="p-3 text-left">Photo</th>
                <th>Name</th>
                <th>Bio</th>
                <th>Social</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {members.map((m) => (
                <tr key={m._id} className="border-b">
                  <td className="p-3">
                    <img
                      src={
                        m.image
                          ? `${IMAGE_URL}${m.image}`
                          : "https://via.placeholder.com/100"
                      }
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>

                  <td>
                    <p className="font-semibold">{m.name}</p>
                    <span className="text-xs text-gray-500">{m.role}</span>
                  </td>

                  <td className="max-w-xs text-gray-600 text-xs">
                    {m.bio}
                  </td>

                  <td>
                    <div className="flex gap-3 text-blue-600">
                      <a href={m.facebook} target="_blank" rel="noreferrer"><FaFacebookF /></a>
                      <a href={m.instagram} target="_blank" rel="noreferrer"><FaInstagram /></a>
                      <a href={m.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                    </div>
                  </td>

                  <td>
                    <button
                      onClick={() => removeMember(m._id)}
                      className="text-red-500"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {!members.length && (
            <p className="text-gray-400 text-center mt-6">
              No team members added yet.
            </p>
          )}

        </div>
      </div>
    </div>
  );
};

export default TeamAdmin;