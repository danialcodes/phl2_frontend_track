import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import { Blog } from "@/types";

const LatestBlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div
      key={blog.id}
      className="w-full bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <figure>
        <Image
          src={blog.blog_image}
          width={600}
          height={100}
          alt="blog image"
          className="h-96 w-full object-cover"
        />
      </figure>
      <div className="p-5">
        <p className="flex items-center justify-center text-teal-600 bg-teal-100 w-fit px-3 py-1 rounded-full">
          <FaCalendar className="mr-2" />
          {blog.publish_date}
        </p>
        <h2 className="text-xl font-semibold mt-3 mb-2">{blog.title}</h2>
        <p className="text-gray-400 mb-4">
          {blog.description.length > 100
            ? blog.description.slice(0, 180) + "..."
            : blog.description}
          <Link href={`/blogs/${blog.id}`} className="text-teal-600 ml-2">
            Read More
          </Link>
        </p>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
              width={100}
              height={100}
              alt="author image"
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-gray-500">{blog.author_name}</span>
          </div>
          <div className="flex items-center">
            <AiFillLike className="text-teal-600 text-xl mr-1" />
            {blog.total_likes} Likes
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlogCard;
