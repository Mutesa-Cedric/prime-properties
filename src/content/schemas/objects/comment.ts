export default {
    name: "comment",
    title: "Comment",
    type: "object",
    fields: [
        {
            name: "commentedBy",
            title: "Commented By",
            type: "string",
            validation: rule => rule.required(),
        },
        {
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            validation: rule => rule.required()
        },
        {
            name: "body",
            title: "Body",
            type: "text",
            validation: rule => rule.required().min(3)
        },
        {
            name: "replies",
            title: "Replies",
            type: "array",
            of: [{ type: "comment" }]
        }
    ]
}