/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import React from "react";
import Image from "next/image";
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Blog, BlogCategory } from "../../@types/types";
import sanityClient from "../../lib/sanity";
import Link from "next/link";
import CommentComponent from "../../components/ui/Comment";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface BlogProps {
    blog: Blog;
    content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, string>>;
    categories: BlogCategory[]
}

export async function getStaticPaths() {
    const blogSlugs = await sanityClient.fetch(`*[_type=="blog"]{
        "slug":slug.current
    }`);

    const paths = blogSlugs.map((blog: any) => ({
        params: {
            blog: blog.slug.slice(6)
        }
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }: { params: { blog: string } }) {
    const blog = await sanityClient.fetch(`*[_type=="blog" && slug.current=="blogs/${params.blog}"][0]{
        ...,
        "banner":banner.asset->url,
        postedBy->,
        category->,
        "slug":slug.current,
    }`);

    const blogCategories = await sanityClient.fetch(`*[_type=="blogCategory"]`);


    const content = blog.content;
    const mdxSource = await serialize(content);

    return {
        props: {
            blog,
            content: mdxSource,
            categories: blogCategories
        },
    }
}

type Inputs = {
    commentedBy: string;
    email: string;
    body: string;
}

const ViewBlog = ({ blog, content, categories }: BlogProps) => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<Inputs>();
    const [enableSubmit, setEnableSubmit] = React.useState(false);
    const [loading, setLoading] = React.useState<boolean>(false);


    const onSubmit: SubmitHandler<Inputs> = async data => {

        setLoading(true);
        await sanityClient
            .patch(blog._id)
            .set({
                comments: [
                    ...blog.comments || [],
                    {
                        commentedBy: data.commentedBy,
                        email: data.email,
                        body: data.body,
                        // profileImage: null
                    }
                ]
            })
            .commit()
            .then(() => {
                // reload the route
                toast.success("Your Message was recieved", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000
                });
                window.location.reload();
                reset({
                    commentedBy: '',
                    email: '',
                    body: ''
                })
            }).catch((err: any) => {
                toast.error('An error occured', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000
                })
            }).finally(() => {
                setLoading(false);
            })
    }

    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => {

            if (value.email && value.commentedBy && value.body) {
                setEnableSubmit(true);
            } else {
                setEnableSubmit(false);
            }
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    return (
        <div className="w-full">
            <Head>
                <title>prime properties | {blog.title}</title>
                <link rel="shortcut icon" href="/icons/logo.svg" type="image/x-icon" />
            </Head>
            <main className="xl:px-60 lg:px-40 md:px-12 py-20 flex justify-between">
                <div className="flex flex-col space-y-6 w-[65%]">
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
                            <p>{blog.comments ? blog.comments.length : 0} Comments</p>
                        </div>
                    </div>
                    <div className="relative w-full h-72">
                        <Image src={blog.banner} layout="fill" objectFit="cover" />
                        <div className="absolute left-4 bottom-4 p-2 bg-primary-light text-white">
                            {blog.publishedAt}
                        </div>
                    </div>
                    <div className="w-full h-auto text-gray-primary/75">
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
                            <div className="flex space-x-3 items-center justify-between">
                                <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.4961 13C16.4961 15.2031 14.6992 17 12.4961 17C10.293 17 8.49609 15.2031 8.49609 13C8.49609 10.7969 10.293 9 12.4961 9C14.6992 9 16.4961 10.7969 16.4961 13ZM18.6523 13C18.6523 9.59375 15.9023 6.84375 12.4961 6.84375C9.08984 6.84375 6.33984 9.59375 6.33984 13C6.33984 16.4062 9.08984 19.1562 12.4961 19.1562C15.9023 19.1562 18.6523 16.4062 18.6523 13ZM20.3398 6.59375C20.3398 5.79687 19.6992 5.15625 18.9023 5.15625C18.1055 5.15625 17.4648 5.79687 17.4648 6.59375C17.4648 7.39062 18.1055 8.03125 18.9023 8.03125C19.6992 8.03125 20.3398 7.39062 20.3398 6.59375ZM12.4961 3.15625C14.2461 3.15625 17.9961 3.01562 19.5742 3.64062C20.1211 3.85937 20.5273 4.125 20.9492 4.54687C21.3711 4.96875 21.6367 5.375 21.8555 5.92187C22.4805 7.5 22.3398 11.25 22.3398 13C22.3398 14.75 22.4805 18.5 21.8555 20.0781C21.6367 20.625 21.3711 21.0312 20.9492 21.4531C20.5273 21.875 20.1211 22.1406 19.5742 22.3594C17.9961 22.9844 14.2461 22.8437 12.4961 22.8437C10.7461 22.8437 6.99609 22.9844 5.41797 22.3594C4.87109 22.1406 4.46484 21.875 4.04297 21.4531C3.62109 21.0312 3.35547 20.625 3.13672 20.0781C2.51172 18.5 2.65234 14.75 2.65234 13C2.65234 11.25 2.51172 7.5 3.13672 5.92187C3.35547 5.375 3.62109 4.96875 4.04297 4.54687C4.46484 4.125 4.87109 3.85937 5.41797 3.64062C6.99609 3.01562 10.7461 3.15625 12.4961 3.15625ZM24.4961 13C24.4961 11.3437 24.5117 9.70312 24.418 8.04687C24.3242 6.125 23.8867 4.42187 22.4805 3.01562C21.0742 1.60937 19.3711 1.17187 17.4492 1.07812C15.793 0.984374 14.1523 0.999999 12.4961 0.999999C10.8398 0.999999 9.19922 0.984374 7.54297 1.07812C5.62109 1.17187 3.91797 1.60937 2.51172 3.01562C1.10547 4.42187 0.667969 6.125 0.574219 8.04687C0.480469 9.70312 0.496094 11.3437 0.496094 13C0.496094 14.6562 0.480469 16.2969 0.574219 17.9531C0.667969 19.875 1.10547 21.5781 2.51172 22.9844C3.91797 24.3906 5.62109 24.8281 7.54297 24.9219C9.19922 25.0156 10.8398 25 12.4961 25C14.1523 25 15.793 25.0156 17.4492 24.9219C19.3711 24.8281 21.0742 24.3906 22.4805 22.9844C23.8867 21.5781 24.3242 19.875 24.418 17.9531C24.5117 16.2969 24.4961 14.6562 24.4961 13Z" fill="#7B7B7B" />
                                </svg>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.94922 7.76562H0.792969V23.25H5.94922V7.76562ZM6.27734 2.98437C6.26172 1.46875 5.16797 0.312499 3.40234 0.312499C1.65234 0.312499 0.496094 1.46875 0.496094 2.98437C0.496094 4.46875 1.60547 5.65625 3.33984 5.65625H3.37109C5.16797 5.65625 6.29297 4.46875 6.27734 2.98437ZM24.4961 14.375C24.4961 9.625 21.9648 7.40625 18.5742 7.40625C15.793 7.40625 14.5742 8.95312 13.9023 10.0156H13.9336V7.76562H8.79297C8.79297 7.76562 8.85547 9.21875 8.79297 23.25H13.9336V14.6094C13.9336 14.1406 13.9805 13.6875 14.1055 13.3437C14.4805 12.4219 15.3242 11.4687 16.7461 11.4687C18.6055 11.4687 19.3555 12.8906 19.3555 14.9687V23.25H24.4961V14.375Z" fill="#7B7B7B" />
                                </svg>

                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.8242 14.6094C18.8242 17.7812 15.7617 19.25 12.8242 19.25C9.30859 19.25 6.37109 17.6875 6.37109 15.7656C6.37109 14.9062 6.85547 14.125 7.94922 14.125C9.62109 14.125 9.77734 16.5312 12.668 16.5312C14.043 16.5312 14.9336 15.9219 14.9336 15.125C14.9336 14.125 14.0742 13.9687 12.6836 13.625L10.4023 13.0625C8.12109 12.5156 6.37109 11.5781 6.37109 8.95312C6.37109 5.78125 9.51172 4.60938 12.2148 4.60938C15.168 4.60938 18.1523 5.78125 18.1523 7.57812C18.1523 8.48437 17.543 9.28125 16.5273 9.28125C15.0117 9.28125 14.9648 7.48437 12.5117 7.48437C11.1367 7.48437 10.2617 7.85937 10.2617 8.6875C10.2617 9.59375 11.1523 9.79687 12.3398 10.0781L13.9648 10.4531C16.1836 10.9531 18.8242 11.8906 18.8242 14.6094ZM24.4961 18C24.4961 16.625 24.0273 15.3594 23.2461 14.3438C23.4023 13.5937 23.4961 12.7969 23.4961 12C23.4961 5.92188 18.5742 0.999998 12.4961 0.999998C11.6992 0.999998 10.9023 1.09375 10.1523 1.25C9.13672 0.46875 7.87109 -1.19209e-06 6.49609 -1.19209e-06C3.18359 -1.19209e-06 0.496094 2.6875 0.496094 6C0.496094 7.375 0.964844 8.64062 1.74609 9.65625C1.58984 10.4062 1.49609 11.2031 1.49609 12C1.49609 18.0781 6.41797 23 12.4961 23C13.293 23 14.0898 22.9063 14.8398 22.75C15.8555 23.5313 17.1211 24 18.4961 24C21.8086 24 24.4961 21.3125 24.4961 18Z" fill="#7B7B7B" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-between pb-5 border-b-2 border-[#D3DEE8]">
                        <div className="flex flex-col space-y-2">
                            <span className="text-sm text-gray-primary/50">Prev Post</span>
                            <p className="text-medium text-base text-gray-primary" >There are many variations</p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <span className="text-sm text-gray-primary/50">Next Post</span>
                            <p className="text-medium text-base text-gray-primary">There are many variations</p>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <div className="pb-2 text-2xl font-semibold text-heading-1 flex flex-col space-y-2">
                            <p> 0 {blog.comments?.length} comments</p>
                            <div className="h-1 border w-24 rounded-xl bg-primary-light border-primary-light"></div>
                        </div>

                        {/* comments */}
                        <div className="flex flex-col space-y-2 pt-2 pb-4">
                            {blog.comments ?
                                blog.comments.map((comment, index) => (
                                    <CommentComponent {...comment} key={index} />
                                )) :
                                <p className="text-base text-gray-primary">No comments yet</p>
                            }
                        </div>

                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-6 border-[#D3DEE8] border space-y-4'>
                        <div className='space-y-2'>
                            <p className='text-lg font-medium'>Leave a comment</p>
                            <div className='w-16 bg-primary-light border-2 border-primary-light rounded-xl'></div>
                        </div>
                        <div className='flex flex-col space-y-3'>
                            <div className='flex items-center w-full space-x-5'>
                                <div className='input-wrapper contact-form'>
                                    <label htmlFor="fullname">Full Name</label>
                                    <input type="text" id="fullname" placeholder="Type Full Name"    {...register("commentedBy", { required: true, min: 2, max: 50 })} />
                                    {
                                        errors.commentedBy && <p className="text-sm font-medium text-red-400">Enter a valid name!</p>
                                    }
                                </div>
                                <div className='input-wrapper contact-form'>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" id="email" placeholder="Your email"    {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                                    />
                                    {
                                        errors.email && <p className="text-sm font-medium text-red-400">Enter a valid email!</p>
                                    }
                                </div>
                            </div>
                            <div className='input-wrapper contact-form'>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={6} placeholder="Your Comment" {...register("body", { required: true })} />
                            </div>
                        </div>
                        {loading ?
                            <button disabled type="button" className='bg-gray-400 cursor-not-allowed px-6 py-3 w-max text-white'>
                                <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                                Loading...
                            </button> :
                            <button disabled={!enableSubmit} className={!enableSubmit ? 'bg-gray-400 cursor-not-allowed px-6 py-3 w-max text-white' : 'bg-primary-light px-6 py-3 w-max text-white'}>
                                Submit Comment
                            </button>
                        }
                    </form>

                </div>
                <div className="flex flex-col w-[30%] space-y-6">
                    <div className="bg-[#EEF7FF] p-4 relative">
                        <input type="text" className="pl-10 w-full placeholder:text-gray-primary/75 bg-white outline-none border-2 py-2" placeholder="Search Blog" />
                        <div className='absolute top-7 left-6'>
                            <Image src={'/icons/search_icon.svg'} width={20} height={20} />
                        </div>
                    </div>
                    <div className="bg-[#EEF7FF] p-3 space-y-4">
                        <h2 className="text-lg font-medium pb-2 border-b">Category</h2>
                        <div className="space-y-3 flex flex-col">
                            {
                                categories.map((category, i) => (
                                    <Link key={i} href={`/${category.slug}`}>
                                        <div key={i} className={category.title === blog.category.title ? "flex space-x-2 items-center text-primary-light cursor-pointer" : "hover:text-primary-light cursor-pointer flex space-x-2 items-center text-gray-primary"}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                            <p>{category.title}</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                    <div className="bg-[#EEF7FF] p-3 space-y-4">
                        <h2 className="text-lg font-medium pb-2 border-b">Popular Tags</h2>
                        <div className="flex  flex-wrap justify-between">
                            {
                                blog.tags.map((tag, i) => (
                                    <div key={i} className="py-3 px-5 mr-2 mb-3 bg-white text-[#7B7B7B]">
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