import Head from "next/head";
import React from "react";
import { AppData } from "../../@types/types";
import BlogComponent from "../../components/blog/Blog";
import sanityClient from "../../lib/sanity"
import { blogsQuery } from "../../utils/queries";

export async function getStaticProps() {
    const blogs = await sanityClient.fetch(blogsQuery);

    return {
        props: {
            blogs
        }
    }
}


const BlogsPage = ({ blogs }: AppData) => {
    return (
        <div className="w-full">
            <Head>
                <title>Prime Properties | Blog Articles</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="xl:px-60 lg:px-40 md:px-12 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {
                    blogs.map((blog, i) => (
                        <BlogComponent blog={blog} key={i} />
                    ))
                }

            </main>
        </div>
    )

}

BlogsPage.innerPage = true;
BlogsPage.title = "Blog Articles";

export default BlogsPage