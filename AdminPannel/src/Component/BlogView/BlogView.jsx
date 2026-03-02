import React, { useEffect, useState } from "react";
import API, { IMAGE_URL } from "../../api/axios";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await API.get("/blogs");
      const publishedBlogs =
        res.data.data?.filter(
          (blog) => blog.status?.toLowerCase() === "published"
        ) || [];

      setBlogs(publishedBlogs);
    } catch (err) {
      console.error("BLOG FETCH ERROR:", err);
    }
  };

  // Split blogs for layout
  const heroBlog = blogs[0];
  const sideBlogs = blogs.slice(1, 3);
  const cardBlogs = blogs.slice(3, 7);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* HEADER */}
      <h2 className="text-3xl font-bold mb-8">Blog Details</h2>

      {/* TOP SECTION */}
      <div className="grid lg:grid-cols-3 gap-8">

        {/* LEFT HERO */}
        {heroBlog && (
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden">
            <img
              src={`${IMAGE_URL}${heroBlog.image}`}
              alt=""
              className="w-full h-[420px] object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-6 left-6 text-white max-w-lg">
              <p className="text-sm mb-2">
                {heroBlog.createdAt?.slice(0, 10)}
              </p>

              <h3 className="text-2xl font-semibold leading-snug mb-3">
                {heroBlog.title}
              </h3>

              <div className="flex gap-6 text-sm opacity-90">
                <span>{heroBlog.author}</span>
                <span>{heroBlog.tags?.length || 0} Tags</span>
                <span>{heroBlog.status}</span>
              </div>
            </div>
          </div>
        )}

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">
          {sideBlogs.map((blog, i) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl shadow p-4 flex gap-4"
            >
              <img
                src={`${IMAGE_URL}${blog.image}`}
                alt=""
                className="w-28 h-28 object-cover rounded-lg"
              />

              <div>
                <p className="text-gray-400 text-sm mb-1">
                  {blog.createdAt?.slice(0, 10)}
                </p>

                <h4 className="font-semibold leading-snug mb-1">
                  {blog.title}
                </h4>

                <p className="text-sm text-gray-500">
                  {blog.quotes?.slice(0, 80)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOG CARDS */}
      <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8 mt-14">
        {cardBlogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
          >
            <img
              src={`${IMAGE_URL}${blog.image}`}
              alt=""
              className="w-full h-56 object-cover hover:scale-105 transition duration-500"
            />

            <div className="p-6 text-center">
              <p className="text-sm text-gray-400 mb-3">
                {blog.createdAt?.slice(0, 10)} | by {blog.author}
              </p>

              <h3 className="font-semibold leading-relaxed">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BlogPage;