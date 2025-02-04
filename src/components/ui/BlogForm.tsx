import { createBlog } from "@/actions/createBlog";
import Form from "next/form";
const BlogForm = () => {


  return (
    <div className="flex items-center justify-center min-h-screen my-10">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <Form action={createBlog}>
          <h2 className="text-2xl font-semibold mb-6 text-teal-600 text-center">
            Create Blog
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter blog title"
              />
            </div>
            {/* Author Name */}
            <div>
              <label
                htmlFor="author_name"
                className="block text-sm font-medium text-gray-700"
              >
                Author Name
              </label>
              <input
                type="text"
                name="author_name"
                id="author_name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter author name"
              />
            </div>
            {/* Publish Date */}
            <div>
              <label
                htmlFor="publish_date"
                className="block text-sm font-medium text-gray-700"
              >
                Publish Date
              </label>
              <input
                type="date"
                name="publish_date"
                id="publish_date"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              />
            </div>
            {/* Total Likes */}
            <div>
              <label
                htmlFor="total_likes"
                className="block text-sm font-medium text-gray-700"
              >
                Total Likes
              </label>
              <input
                type="number"
                name="total_likes"
                id="total_likes"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
                placeholder="Enter total likes"
              />
            </div>
          </div>
          {/* Blog Image (URL Input) */}
          <div className="my-5">
            <label
              htmlFor="blog_image"
              className="block text-sm font-medium text-gray-700"
            >
              Blog Image URL
            </label>
            <input
              type="url"
              id="blog_image"
              name="blog_image"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Paste image URL here"
            />
          </div>
          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500"
              placeholder="Enter blog description"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Create
          </button>
        </Form>
      </div>
    </div>
  );
};

export default BlogForm;
