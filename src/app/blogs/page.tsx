"use client";
import BlogCard from "@/components/ui/BlogCard";
import { useGetBlogsQuery } from "@/redux/apis/blogs.slice";
import { Blog } from "@/types";



// export const metadata = {
//     title: "Blogs",
//     description: "Explore all blogs",
// }
const BlogsPage = () => {
    const {data,isLoading} = useGetBlogsQuery({});
    console.log('data',data);
    if(isLoading) return <div>Loading...</div>
    return (
        <div>
            <h1 className="text-3xl text-center my-5 font-bold">
                Explore all <span className="text-teal-600">Blogs</span>
            </h1>
            <p className="text-center text-gray-400 w-2/5 mx-auto">
                <i>
                Dive into the fascinating world of quantum computing, where unlocking
                unprecedented computational power.
                </i>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mx-2">
                {data.map((blog:Blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogsPage;