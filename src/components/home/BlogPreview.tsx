import Image from "next/image";
import React from "react";
import { Blog } from "../../@types/types";
import Link from "next/link";

const BlogPreview = ({ banner, description, postedBy, publishedAt, slug }: Blog) => {
    return (
        <Link href={`/${slug}`}>
            <div className="card rounded border-2 border-[#D3DEE8] hover:border-primary-light space-y-5 p-5 cursor-pointer">
                <div className="relative w-full h-48">
                    <Image src={banner} layout="fill" objectFit="cover" />
                </div>
                <div className="flex flex-col space-y-4">
                    <p className="text-heading-1 text-lg font-medium">{description}</p>
                    <div className="flex items-cener space-x-4 w-full  text-gray-primary/50">
                        <div className="flex items-center space-x-2">
                            <Image src="/icons/clock_icon.svg" width={17} height={17} />
                            <p className="text-base text-gray-primary/50">{publishedAt}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 15.75V14.25C15 13.4544 14.6839 12.6913 14.1213 12.1287C13.5587 11.5661 12.7956 11.25 12 11.25H6C5.20435 11.25 4.44129 11.5661 3.87868 12.1287C3.31607 12.6913 3 13.4544 3 14.25V15.75" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 8.25C10.6569 8.25 12 6.90685 12 5.25C12 3.59315 10.6569 2.25 9 2.25C7.34315 2.25 6 3.59315 6 5.25C6 6.90685 7.34315 8.25 9 8.25Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="truncate text-base text-gray-primary/50">{postedBy.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogPreview;