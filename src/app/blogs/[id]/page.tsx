import BlogDetailsCard from '@/components/ui/BlogDetailsCard';
import { Blog } from '@/types';
import React from 'react';

export const generateStaticParams = async () => {
    const res = await fetch(`http://localhost:3000/api/blogs`);
    const data = await res.json();
    return data.slice(0,3).map((blog:Blog)=>({id: blog.id}));
};

export const generateMetadata = async ({params}:{params:Promise<{id:string}>})=>{
    const {id} = await params;
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`);
    const data = await res.json();
    return {
        title: data.title,
        description: data.snippet,
    };
}


const SingleBlog = async({params}:{params:Promise<{id:string}>}) => {
    const {id} = await params;
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`,{
        cache: "no-cache",
    });
    const data = await res.json();
    return (
        <div>
            <BlogDetailsCard blog={data} />
        </div>
    );
};

export default SingleBlog;