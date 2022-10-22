// @ts-nocheck
export default {
    name: "blogCategory",
    title: "Blog Category",
    type: "document",
    preview: {
        select: {
            subtitle: "title"
        },
        prepare(selection) {
            const { subtitle } = selection;
            return {
                title: "Blog Category",
                subtitle: subtitle
            }
        }
    },
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: Rule => Rule.required().min(3).max(200).warning(
                "please provide a title for this blog category"
            )
        },
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options: {
                source: (doc) => {
                    return `categories/${doc.title}`
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