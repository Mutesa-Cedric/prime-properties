// @ts-nocheck
export default {
    name: "agent",
    title: "Agent",
    type: "document",
    preview: {
        select: {
            title: "name",
            media: "profileImage",
        }
    },
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required().warning(
                "please provide a name for this agent"
            )
        },
        {
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            validation: Rule => Rule.required().warning(
                "please provide a profile image for this agent"
            )
        },
        {
            name: "role",
            title: "Role",
            type: "string",
            validation: Rule => Rule.required().min(2).max(80).warning(
                "provide a role name between 2 and 80 characters"
            )
        },
        {
            name: "email",
            title: "Email",
            type: "string",
            validation: Rule => Rule.required().warning(
                "please provide an email for this agent"
            )
        },
        {
            name: "phoneNumber",
            title: "Phone Number",
            type: "string",
            validation: Rule => Rule.required().warning(
                "please provide a phone number for this agent"
            )
        },
        {
            name: "whatsappNumber",
            title: "Whatsapp Number",
            type: 'string'
        },
        {
            name: "about",
            title: "About",
            type: "text",
            validation: Rule => Rule.required().warning(
                "please provide a description for this agent"
            )
        },
        {
            name: "socialMedia",
            title: "Social Media",
            description: "social media of this agent",
            type: "array",
            of: [{ type: "socialMedia" }],
            validation: (Rule) => Rule.required()
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: (doc) => {
                    return `agents/${doc.name}`
                },
                slugify: (input: string) =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
            validation: Rule => Rule.required().warning(
                "please provide a slug"
            )
        },
        {
            name:"comments",
            title:"Comments",
            type:"array",
            of:[{type:"comment"}]
        }
    ]
}