// @ts-nocheck
export default {
    name: "collection",
    title: "Collection",
    type: "document",
    preview: {
        select: {
            title: "name",
            subtitle: "description",
            media: "banner"
        }
    },
    fields: [
        {
            name: "name",
            title: "Name",
            description: "name of a collection",
            type: "string",
            validation: Rule => Rule.required().min(3).max(100).warning(
                "please provide a name for this collection between 3 and 100 characters"
            )
        },
        {
            name: "description",
            title: "Description",
            description: "description of a collection",
            type: "text",
            validation: Rule => Rule.required().warning(
                "please provide a description for this collection"
            )
        },
        {
            name: "banner",
            title: "Banner",
            description: "banner image for a collection",
            type: "image",
            validation: Rule => Rule.required().warning(
                "please provide a banner image for this collection"
            )
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true
                    }
                }
            ],
        },
        {
            name: "slug",
            title: "Slug",
            description: "slug for a collection",
            type: "slug",
            options: {
                source: (doc) => {
                    return `gallery/${doc.name}`
                },
                slugify: (input: string) =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)
            },
            validation: Rule => Rule.required().warning(
                "please provide a slug for this collection"
            )
        }
    ]
}