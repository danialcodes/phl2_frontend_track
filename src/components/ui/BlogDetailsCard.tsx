import { Blog } from "@/types";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";

const BlogDetailsCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="w-2/3 bg-white shadow-lg rounded-lg mx-auto p-6">
      <p className="flex items-center justify-center mx-auto text-teal-500 bg-teal-100 w-fit px-3 py-1 rounded-full">
        <FaCalendar className="mr-2" />
        {blog.publish_date}
      </p>
      <h2 className="text-center text-4xl font-semibold my-5">{blog.title}</h2>
      <div className="flex items-center justify-center bg-gray-100 mb-5 py-2 rounded-lg gap-2">
        <Image
          src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
          width={30}
          height={30}
          alt="author image"
        />

        <span className="text-lg font-medium">{blog.author_name}</span>
      </div>
      <figure className="mb-5">
        <Image
          src={blog.blog_image}
          width={600}
          height={100}
          alt="blog image"
          className="rounded-lg w-full object-cover"
        />
      </figure>
      <div className="text-gray-700 text-lg leading-relaxed">
        <p className="text-justify text-gray-500">{blog.description}</p>
      </div>
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center text-xl text-gray-600">
          <AiFillLike className="text-teal-500 mr-2" />
          <span className="mr-1">{blog.total_likes}</span>
          Likes
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsCard;
