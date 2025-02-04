'use server';

import { redirect } from "next/navigation";

export const createBlog = async (data: FormData) => {
    const blogData = Object.fromEntries(data.entries());
    const res = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(blogData)
    });
    const resData = await res.json();
    if(resData){
        redirect("/blogs/"+resData.id);
    }
    return resData;
}