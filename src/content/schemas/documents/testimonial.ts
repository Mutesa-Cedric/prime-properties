// @ts-nocheck
export default{
    name:"testimonial",
    title:"Testimonial",
    type:"document",
    preview:{
        select:{
            title:"name",
            subtitle:"role",
            media:"profileImage"
        }
    },
    fields:[
        {
            name:"name",
            title:"Name",
            type:"string",
            validation:Rule=>Rule.required().warning("please provide a name for this testimonial")
        },
        {
            name:"profileImage",
            title:"Profile Image",
            type:"image",
            validation:Rule=>Rule.required().warning("please provide a profile image for this testimonial")
        },
        {
            name:"role",
            title:"Role",
            type:"string",
            validation:Rule=>Rule.required().min(2).max(80).warning("provide a role name between 2 and 80 characters")
        },
        {
            name:"testimonial",
            title:"Testimonial",
            type:"text",
            validation:Rule=>Rule.required().warning("please provide a testimonial for this testimonial")
        },
        {
            name:"stars",
            title:"stars",
            type:"number",
            validation:Rule=>Rule.required().warning("please provide a number of stars for this testimonial")
        }
    ]
}