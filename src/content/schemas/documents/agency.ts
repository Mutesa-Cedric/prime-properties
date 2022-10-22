// @ts-nocheck
export default {
    name: "agency",
    title: "Agency",
    type: "document",
    preview: {
        select: {
            subtitle: "name",
            media:"logo",
        },
        prepare({ subtitle,media }) {
            return {
                title: "Agency",
                subtitle: subtitle,
                media:media
            }
        }
    },
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            description: "name of agency",
            validation: Rule => Rule.required().min(3).max(300).warning(
                "please provide a name for this admin"
            )
        },
        {
            name: "logo",
            title: "Logo",
            type: "image",
            validation: rule => rule.required()
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            validation: rule => rule.required()
        },
        {
            name: "socialMedia",
            title: "Social Media",
            type: "array",
            validation: Rule => Rule.required().warning(
                "please provide agency social media"
            ),
            of: [
                { type: "socialMedia" }
            ]
        }
    ]
}