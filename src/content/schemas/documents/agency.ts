export default {
    name: "agency",
    title: "Agency",
    type: "document",
    preview: {
        select: {
            subtitle: "name",
        },
        prepare({ subtitle }) {
            return {
                title: "Agency",
                subtitle: subtitle
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
            validation: Rule => Rule.required().email().warning(
                "please provide a valid email for this admin"
            ),
            of: [
                { type: "socialMedia" }
            ]
        }
    ]
}