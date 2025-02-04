import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";
import Link from "next/link";
import { Blog } from "@/types";

const LatestBlogs = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-3xl text-center my-5 font-bold">
        Latest Blogs From <span className="text-teal-600">NexaBlog</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="text-center">
        <Link href="/blogs">
          <button className="px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-500">
            See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestBlogs;
