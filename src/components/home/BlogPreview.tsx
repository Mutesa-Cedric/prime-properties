import Image from "next/image";
import React from "react";
import { Blog } from "../../@types/types";

const BlogPreview = ({ banner, title, postedBy, publishedAt }: Blog) => {
    return (
        <div className="card rounded border border-[#D3DEE8] hover:border-primary-light">
            <div className="relative w-full h-60">
                <Image src={banner} layout="fill" objectFit="cover" />
            </div>
            <div className="flex flex-col space-y-2">
                <p className="font-semibold text-heading-2 text-lg">{title}</p>
                <div className="flex items-center space-x-2 text-gray-primary/50">
                    <div className="flex items-center space-x-1">
                        <Image src="/icons/clock_icon.svg" width={15} height={15} />
                        <p>{publishedAt}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Image src="/icons/clock_icon.svg" width={15} height={15} />
                        <p>{postedBy.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPreview;