import Head from "next/head";
import React from "react";
import { Blog } from "../../@types/types";
import BlogComponent from "../../components/blog/Blog";
import sanityClient from "../../lib/sanity"

interface BlogsProps {
    blogs: Blog[]
}

export async function getStaticProps() {
    const blogs = await sanityClient.fetch(`*[_type=="blog"]{
        ...,
        "banner":banner.asset->url,
        postedBy->
    }`);
    return {
        props: {
            blogs
        }
    }
}


const BlogsPage = ({ blogs }: BlogsProps) => {
    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | Blog Articles</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="lg:px-60 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    blogs.map((blog, i) => (
                        <BlogComponent {...blog} key={i} />
                    ))
                }
            </main>
        </div>
    )

}

export default BlogsPage