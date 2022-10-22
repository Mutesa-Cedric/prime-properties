// @ts-nocheck
export default {
    name: "admin",
    title: "Administrator",
    type: "document",
    preview: {
        select: {
            subtitle: "name",
        },
        prepare({ subtitle }) {
            return {
                title: "Admin",
                subtitle: subtitle
            }
        }
    },
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            description: "name of an admin",
            validation: Rule => Rule.required().min(3).max(300).warning(
                "please provide a name for this admin"
            )
        },
        {
            name: "email",
            title: "Email",
            type: "string",
            description: "email of an admin",
            validation: Rule => Rule.required().email().warning(
                "please provide a valid email for this admin"
            )
        }
    ]
}