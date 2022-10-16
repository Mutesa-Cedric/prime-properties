import Head from "next/head";
import React from "react";
import Image from "next/image";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Blog, BlogCategory } from "../../@types/types";
import sanityClient from "../../lib/sanity";
import Link from "next/link";


interface BlogProps {
    blog: Blog;
    content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>;
    categories: BlogCategory[]
}

export async function getStaticPaths() {
    const blogSlugs = await sanityClient.fetch(`*[_type=="blog"]{
        "slug":slug.current
    }`);

    const paths = blogSlugs.map((slug: string) => ({
        params: {
            blog: slug.slice(6)
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }: { params: { blog: string } }) {
    const blog = await sanityClient.fetch(`*[_type=="blog" && slug.current="blogs/${params.blog}"]{
        title,
        category->name,
        content,
        description,
        postedBy->name,
        publishedAt,
        tags,
        "slug":slug.current,
        comments
    }`);
    const blogCategories = await sanityClient.fetch(`*[_type=="blogCategory"]`);


    const content = blog.content;
    const serializedContent = await serialize(content);

    return {
        props: {
            blog,
            content: serializedContent,
            categories: blogCategories
        }
    }
}

const ViewBlog = ({ blog, content, categories }: BlogProps) => {
    return (
        <div className="w-full">
            <Head>
                <title>prime properties | {blog.title}</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="lg:px-60 py-20 flex justify-between">
                <div className="flex flex-col space-y-3 w-[65%]">
                    <h1 className="text-2xl font-semibold text-gray-primary">{blog.title}</h1>
                    <div className="flex items-center space-x-3 text-[#7B7B7B] text-sm">
                        <div className="space-x-2 flex items-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.0711 12.9289C15.9819 11.8398 14.6855 11.0335 13.2711 10.5454C14.786 9.50199 15.7812 7.75578 15.7812 5.78125C15.7812 2.59348 13.1878 0 10 0C6.81223 0 4.21875 2.59348 4.21875 5.78125C4.21875 7.75578 5.21402 9.50199 6.72898 10.5454C5.31453 11.0335 4.01813 11.8398 2.92895 12.9289C1.0402 14.8177 0 17.3289 0 20H1.5625C1.5625 15.3475 5.34754 11.5625 10 11.5625C14.6525 11.5625 18.4375 15.3475 18.4375 20H20C20 17.3289 18.9598 14.8177 17.0711 12.9289ZM10 10C7.67379 10 5.78125 8.1075 5.78125 5.78125C5.78125 3.455 7.67379 1.5625 10 1.5625C12.3262 1.5625 14.2188 3.455 14.2188 5.78125C14.2188 8.1075 12.3262 10 10 10Z" fill="#7B7B7B" />
                            </svg>
                            <p>{blog.postedBy.name}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.125 10.625H6.875C6.53 10.625 6.25 10.905 6.25 11.25C6.25 11.595 6.53 11.875 6.875 11.875H13.125C13.47 11.875 13.75 11.595 13.75 11.25C13.75 10.905 13.47 10.625 13.125 10.625ZM14.375 6.875H5.625C5.28 6.875 5 7.155 5 7.5C5 7.845 5.28 8.125 5.625 8.125H14.375C14.72 8.125 15 7.845 15 7.5C15 7.155 14.72 6.875 14.375 6.875ZM10 0C4.47752 0 0 3.91748 0 8.75C0 11.5119 1.46562 13.9706 3.75 15.5744V20L8.13062 17.3419C8.7369 17.4419 9.36062 17.5 10 17.5C15.5231 17.5 20 13.5825 20 8.75C20 3.91748 15.5231 0 10 0ZM10 16.25C9.27 16.25 8.565 16.165 7.88748 16.0206L4.94497 17.7893L4.98435 14.8906C2.72876 13.5338 1.25 11.2913 1.25 8.75C1.25 4.60814 5.16748 1.25 10 1.25C14.8325 1.25 18.75 4.60814 18.75 8.75C18.75 12.8919 14.8325 16.25 10 16.25Z" fill="#7B7B7B" />
                            </svg>
                            <p>{blog.comments.length} Comments</p>
                        </div>
                    </div>
                    <div className="relative w-full h-96">
                        <Image src={blog.banner} layout="fill" objectFit="cover" />
                        <div className="absolute left-4 bottom-4 p-2 bg-primary-light text-white">
                            {blog.publishedAt}
                        </div>
                    </div>
                    <div className="w-full h-auto">
                        <MDXRemote {...content} />
                    </div>
                    <div className="pb-6 border-b-2 border-b-[#D3DEE8] flex justify-between w-full">
                        <div className="flex flex-col space-y-2">
                            <h2 className="text-lg font-medium">Related Tags</h2>
                            <div className="flex space-x-2">
                                {
                                    blog.tags.map((tag, index) => (
                                        <div key={index} className="p-2 bg-[#EEF7FF] hover:bg-primary-light hover:text-white text-[#7B7B7B] text-base">
                                            {tag}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h2 className="text-gray-primary/75 text-base font-medium">Share this post</h2>
                            <div className="flex space-x-3">
                                <Image src="/icons/instagram_icon.svg" height={10} width={10} />
                                <Image src="/icons/linkedin_icon.svg" height={10} width={10} />
                                <Image src="/icons/pinterest_icon.svg" height={10} width={10} />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-betwen pb-3 border-b-2 border-[#D3DEE8]">
                        <div className="flex flex-col space-y-2">
                            <span className="text-sm text-gray-primary/50">Prev Post</span>
                            <p className="text-medium text-base text-gray-primary" >There are many variations</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <span className="text-sm text-gray-primary/50">Next Post</span>
                            <p className="text-medium text-base text-gray-primary">There are many variations</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[30%] space-y-6">
                    <div className="text-[#EEF7FF] p-3 relative">
                        <input type="text" className="pl-5 placeholder:text-gray-primary/75 bg-white outline-none border-2" placeholder="Search Blog" />
                        <div className='absolute top-3.5 left-2'>
                            <Image src={'/icons/search_icon.svg'} width={16} height={16} />
                        </div>
                    </div>
                    <div className="text-[#EEF7FF] p-3 space-y-4">
                        <h2 className="text-lg font-medium pb-2 border-b">Category</h2>
                        <div className="space-y-3 flex flex-col">
                            {
                                categories.map((category, i) => (
                                    <Link href={`/${category.slug}`}>
                                        <div key={i} className="flex space-x-2 items-center text-gray-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                            <p>{category.title}</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="text-[#EEF7FF] p-3 space-y-4">
                        <h2 className="text-lg font-medium pb-2 border-b">Popular Tags</h2>
                        <div className="flex flex-wrap space-x-3">
                            {
                                blog.tags.map((tag, i) => (
                                    <div key={i} className="p-3 bg-white text-[#7B7B7B]">
                                        {tag}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

ViewBlog.innerPage = true;
ViewBlog.title = "Blog Details"

export default ViewBlog;