import React from "react";
import Image from "next/image"
import { Comment } from "../../@types/types";
import { useNextSanityImage } from "next-sanity-image";
import sanityClient from "../../lib/sanity";

const CommentComponent = ({ commentedBy, profileImage, replies, body }: Comment) => {
    const imageProps = useNextSanityImage(
        sanityClient,
        profileImage
    )
    return (
        <div className="flex flex-col space-x-8 w-full">
            <div className="flex space-x-4 pb-2 border-b-2 border-gray-primary/75">
                <Image {...imageProps} height={80} width={80} className={'rounded-full'} />
                <div className="flex flex-col space-y-2">
                    <div className="flex w-full items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-primary">{commentedBy}</h2>
                        <div className="text-gray-primary/50 flex items-center  space-x-2 text-sm">
                            <span>Reply</span>
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00024 3.49964H6.00021V0.499588C6.00021 0.292585 5.87321 0.107582 5.6802 0.0335808C5.4892 -0.0424204 5.2692 0.00958032 5.1302 0.163583L0.130118 5.66367C-0.0428845 5.85467 -0.0428845 6.14568 0.130118 6.33668L5.1302 11.8368C5.2272 11.9418 5.3622 11.9998 5.5002 11.9998C5.5612 11.9998 5.6222 11.9888 5.6802 11.9668C5.87321 11.8918 6.00021 11.7068 6.00021 11.4998V8.49971H7.05023C10.1083 8.49971 12.9833 9.69073 15.1464 11.8538C15.2904 11.9978 15.5064 12.0398 15.6914 11.9618C15.8784 11.8848 16.0004 11.7018 16.0004 11.4998C16.0004 7.08869 12.4113 3.49964 8.00024 3.49964Z" fill="#7B7B7B" />
                            </svg>
                        </div>
                    </div>
                    <div className="text-gray-primary/75 text-sm">
                        {body}
                    </div>
                </div>
            </div>
            {replies && replies.length > 0 &&
                <div>
                    {
                        replies?.map((reply, i) => (
                            <CommentComponent key={i} {...reply} />
                        ))
                    }
                </div>
            }
        </div>

    )
}

export default CommentComponent;