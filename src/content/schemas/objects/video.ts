// @ts-nocheck
export default {
    title: "Video",
    name: "video",
    type: "object",
    preview: {
        select: {
            media: "banner"
        },
        prepare(selection){
            const {media}=selection;
            return{
                media:media,
                title:"Video"
            }
        }
    },
    fields: [
        {
            name: "banner",
            title: "Video Banner",
            type: "image",
            validation: Rule => Rule.required().warning(
                "please provide a banner image for this video"
            )
        },
        {
            name: "url",
            title: "Video URL",
            type: "url",
            validation: Rule => Rule.required().warning(
                "please provide a url for this video"
            )
        }
    ]
}