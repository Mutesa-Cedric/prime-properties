// @ts-nocheck
export default {
    name: "message",
    title: "Message",
    type: "document",
    preview: {
        select: {
            title: "fullName",
            subtitle: "subject",
        }
    },
    fields: [
        {
            name: "fullName",
            title: "Full Name",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            name: "email",
            title: "email",
            type: "string",
            validation: rule => rule.required()
        },
        {
            name: "subject",
            title: "Subject",
            type: "string",
            validation: rule => rule.required()
        },
        {
            name: "message",
            title: "Message",
            type: "text",
            validation: rule => rule.required()
        }
    ]
}