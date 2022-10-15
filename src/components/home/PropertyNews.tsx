import Link from "next/link";
import React from "react";
import { Blog } from "../../@types/types";
import BlogPreview from "./BlogPreview";

interface BlogProps {
    blogs: Blog[]
}
const PropertyNews: React.FC<BlogProps> = ({ blogs }) => {
    return (
        <div className="bg-[#F9FCFF] h-screen w-full lg:px-60 pt-20 flex flex-col">
            <div className="flex w-full justify-between items-center">
                <div className="flex flex-col space-y-4">
                    <h2 className="text-heading-1 font-semibold text-2xl ">Read Our Properyt News</h2>
                    <p className="text-gray-primary/75 max-w-xl">There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some</p>
                </div>
                <Link href={'/blogs'}>
                    <button className="py-4 text-sm text-white px-6 bg-primary-light">
                        Read More BLogs
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    blogs.slice(0, 3).map((blog, i) => (
                        <BlogPreview key={i} {...blog} />
                    ))
                }
            </div>
        </div>
    )
}

export default PropertyNews;