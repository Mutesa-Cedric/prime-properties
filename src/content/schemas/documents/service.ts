// @ts-nocheck
export default{
    name:"service",
    title:"Service",
    type:"document",
    preview:{
        select:{
            title:"name",
            subtitle:"description",
            media:"banner"
        }
    },
    fields:[
        {
            name:"name",
            title:"Name",
            type:"string",
            description:"name of a service",
            validation:Rule=>Rule.required().min(3).max(200).warning(
                "please provide a name for this service between 3 and 200 characters"
            )
        },
        {
            name:"description",
            title:"Description",
            type:"text",
            description:"description of a service",
            validation:Rule=>Rule.required().warning(
                "please provide a description for this service"
            )
        },
        {
            name:"banner",
            title:"Banner",
            type:"image",
            description:"banner image for a service",
            validation:Rule=>Rule.required().warning(
                "please provide a banner image for this service"
            )
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: (doc) => {
                    return `services/${doc.name}`
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