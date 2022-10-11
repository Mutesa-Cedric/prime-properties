import React from "react";
import { Blog } from "../../@types/types";
import Image from "next/image"

const BlogComponent = ({ title, category, content, publishedAt, banner }: Blog) => {
    return (
        <div className="card border-b border-[#D3DEE8] rounded-[4px] relative flex flex-col space-y-3 pb-2">
            <div className="h-72 w-full rounded">
                <Image src={banner} layout="fill" objectFit="cover" />
            </div>
            <div className="space-y-1">
                <p className="text-primary-light text-sm">{category}</p>
                <h2 className="text-xl font-medium text-gray-primary">{title}</h2>
                <p className="text-gray-primary/75 h-12 truncate">{content}</p>
            </div>
            <div className="bg-primary-light p-2 top-4 left-4 z-50 w-40">
                {publishedAt}
            </div>
        </div>
    )
}


export default BlogComponent;