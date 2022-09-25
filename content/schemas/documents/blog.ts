export default {
    name: "blog",
    title: "Blog",
    type: "document",
    preview: {

    },
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            description: "title of a blog",
            validation: Rule => Rule.required().min(3).max(300).warning(
                "please provide a title for this blog"
            )
        },
        {
            name: 'banner',
            title: "Banner",
            description: "banner image for a blog",
            type: "image",
            validation: Rule => Rule.required().warning(
                "please provide a banner image for this blog"
            )
        },
        {
            name: 'content',
            title: 'Content',
            type: 'markdown',
            validation: Rule => Rule.required().warning(
                "please provide content for this blog"
            )
        },

        {
            name: "postedBy",
            title: "Posted By",
            type: "reference",
            to: [{ type: "agent" }, { type: "admin" }],
            validation: Rule => Rule.required()
        },
        {
            title: 'Published At',
            name: 'publishedAt',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
                calendarTodayLabel: 'Today'
            }
        },
        {
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: (doc) => {
                    return `blogs/${doc.title}`
                },
                slugify: (input: string) =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
            validation: Rule => Rule.required().warning(
                "please provide a slug"
            )
        }

    ]
}