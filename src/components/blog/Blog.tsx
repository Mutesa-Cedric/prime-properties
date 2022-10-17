import React from "react";
import { Blog } from "../../@types/types";
import Image from "next/image"
import Link from "next/link";

interface BlogProps {
    blog: Blog
}
const BlogComponent = ({ blog }: BlogProps) => {
    return (
        
        <Link href={`/${blog.slug}`}>
            <div className="card border-b-2 border-[#D3DEE8] rounded-[4px   ] relative flex flex-col space-y-3 pb-2 cursor-pointer hover:border-primary-light w-full  transition duration-300 ">
                <div className="h-40 w-full rounded relative">
                    <Image src={blog.banner} layout="fill" objectFit="cover" />
                </div>
                <div className="space-y-2 px-3 pb-1 ">
                    <p className="text-primary-light text-sm">{blog.category.title}</p>
                    <h2 className="text-xl font-medium text-gray-primary h-8 truncate">{blog.title}</h2>
                    <p className="text-gray-primary/75 h-12 overflow-hidden">{blog.content}</p>
                </div>
                <div className="bg-primary-light p-2 top-2 left-2 z-50 text-white absolute">
                    {blog.publishedAt}
                </div>
            </div>
        </Link>
    )
}


export default BlogComponent;