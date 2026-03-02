import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import API, { IMAGE_URL } from "../../api/axios";

const BlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    category: "",
    author: "",
    designation: "",
    content: "",
    quotes: "",
    tags: [],
    image: null,
    imagePreview: null,
    status: "draft",
  });

  /* ================= FETCH BLOGS ================= */
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blogs");
      setBlogs(res.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= HANDLE INPUT ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= TAGS ================= */
  const handleAddTag = () => {
    if (!tagInput.trim()) return;

    setForm({
      ...form,
      tags: [...form.tags, tagInput.trim()],
    });

    setTagInput("");
  };

  const handleDeleteTag = (index) => {
    const updated = form.tags.filter((_, i) => i !== index);
    setForm({ ...form, tags: updated });
  };

  /* ================= IMAGE HANDLER ================= */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setForm({
        ...form,
        image: file,
        imagePreview: preview,
      });
    }
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async () => {
    if (!form.title || !form.author) {
      alert("Title and Author required");
      return;
    }

    try {
      const formData = new FormData();

      // always append text fields
      formData.append("title", form.title);
      formData.append("category", form.category);
      formData.append("author", form.author);
      formData.append("designation", form.designation);
      formData.append("content", form.content);
      formData.append("quotes", form.quotes);
      formData.append("status", form.status);
      formData.append("tags", JSON.stringify(form.tags));

      // ONLY append image if new image selected
      if (form.image) {
        formData.append("image", form.image);
      }

      if (editingId) {
        await API.put(`/blogs/${editingId}`, formData);
      } else {
        await API.post("/blogs", formData);
      }

      await fetchBlogs();
      setEditingId(null);

      setForm({
        title: "",
        category: "",
        author: "",
        designation: "",
        content: "",
        quotes: "",
        tags: [],
        image: null,
        imagePreview: null,
        status: "draft",
      });
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (index) => {
    try {
      const blog = blogs[index];
      if (!blog?._id) return;

      await API.delete(`/blogs/${blog._id}`);
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (index) => {
    const blog = blogs[index];
    if (!blog) return;

    setForm({
      title: blog.title || "",
      category: blog.category || "",
      author: blog.author || "",
      designation: blog.designation || "",
      content: blog.content || "",
      quotes: blog.quotes || "",
      tags: blog.tags || [],
      image: null,
      imagePreview: blog.image ? `${IMAGE_URL}${blog.image}` : null,
      status: blog.status || "draft",
    });

    setEditingId(blog._id);
  };

  /* ================= TOGGLE PUBLISH ================= */
  const togglePublish = async (index) => {
    try {
      const blog = blogs[index];
      if (!blog?._id) return;

      const res = await API.patch(`/blogs/toggle/${blog._id}`);

      // ✅ Update only that blog instantly
      const updatedBlogs = [...blogs];
      updatedBlogs[index] = res.data.data;

      setBlogs(updatedBlogs);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 h-full">
        {/* LEFT PANEL — UNCHANGED UI */}
        <div className="bg-white rounded-2xl shadow-xl flex flex-col h-[calc(100vh-120px)]">
          <div className="p-6 border-b shrink-0">
            <h2 className="text-2xl font-bold text-indigo-700">
              {editingId ? "Edit Blog Post" : "Create Blog Post"}
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {/* TITLE */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Blog Title
              </label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* CATEGORY + AUTHOR */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-2"
                >
                  <option value="">Select</option>
                  <option>Technology</option>
                  <option>Design</option>
                  <option>Business</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Author</label>
                <input
                  name="author"
                  value={form.author}
                  onChange={handleChange}
                  className="w-full border rounded-xl px-4 py-2"
                />
              </div>
            </div>

            {/* DESIGNATION */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Designation
              </label>
              <input
                name="designation"
                value={form.designation}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2"
              />
            </div>

            {/* QUOTES */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Highlight Quote
              </label>
              <textarea
                name="quotes"
                value={form.quotes}
                onChange={handleChange}
                rows="2"
                className="w-full border rounded-xl px-4 py-2"
              />
            </div>

            {/* TAGS */}
            <div>
              <label className="block text-sm font-medium mb-1">Tags</label>

              <div className="flex gap-2 mb-2">
                <input
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  className="flex-1 border rounded-xl px-4 py-2"
                  placeholder="Add tag"
                />
                <button
                  onClick={handleAddTag}
                  className="bg-indigo-600 text-white px-4 rounded-xl"
                >
                  Add
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {form.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  >
                    {tag}
                    <button
                      onClick={() => handleDeleteTag(index)}
                      className="text-red-500"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Featured Image
              </label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border rounded-xl px-4 py-2 bg-white"
              />

              {form.imagePreview && (
                <img
                  src={form.imagePreview}
                  alt="preview"
                  className="mt-4 w-full h-48 object-cover rounded-xl border"
                />
              )}
            </div>

            {/* EDITOR */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Blog Description
              </label>

              <Editor
                apiKey={import.meta.env.VITE_TINY_API}
                value={form.content}
                onEditorChange={(newValue) =>
                  setForm({ ...form, content: newValue })
                }
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic underline | " +
                    "alignleft aligncenter alignright alignjustify | " +
                    "bullist numlist outdent indent | link image | code",
                }}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-lg font-medium transition"
            >
              {editingId ? "Update Blog" : "Publish Blog"}
            </button>
          </div>
        </div>

        {/* RIGHT PANEL — UNCHANGED UI */}
        <div className="bg-white rounded-2xl shadow-xl flex flex-col h-[calc(100vh-120px)]">
          <div className="p-6 border-b shrink-0">
            <h2 className="text-2xl font-bold text-indigo-700">Manage Blogs</h2>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {blogs.length === 0 ? (
              <p className="text-gray-400 text-center py-10">
                No blogs added yet.
              </p>
            ) : (
              blogs.map((blog, i) => (
                <div
                  key={blog._id}
                  className="border rounded-xl p-4 hover:shadow-md transition"
                >
                  {blog.image && (
                    <img
                      src={`${IMAGE_URL}${blog.image}`}
                      alt="blog"
                      className="w-full h-48 object-cover rounded-xl mb-3"
                    />
                  )}

                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{blog.title}</h3>

                    <span
                      className={`text-xs px-3 py-1 rounded-full ${
                        blog.status?.toLowerCase() === "published"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {blog.status || "draft"}
                    </span>
                  </div>

                  <p className="text-sm text-gray-500">
                    {blog.createdAt?.slice(0, 10)} • {blog.author}
                  </p>

                  <div
                    className="mt-2 text-sm text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: blog.content,
                    }}
                  />

                  {blog.quotes && (
                    <blockquote className="mt-3 border-l-4 border-indigo-500 pl-4 italic text-indigo-700">
                      {blog.quotes}
                    </blockquote>
                  )}

                  <div className="flex flex-wrap gap-2 mt-3">
                    {blog.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4">
                    <button
                      onClick={() => handleEdit(i)}
                      className="text-blue-600 text-sm"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(i)}
                      className="text-red-600 text-sm"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => togglePublish(i)}
                      className="text-indigo-600 text-sm"
                    >
                      {blog.status === "published" ? "Unpublish" : "Publish"}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
