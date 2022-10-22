// @ts-nocheck
export default{
    name:'plan',
    title:"Plan",
    type:"document",
    preview:{
        select:{
            subtitle:"title",
        },
        prepare(selection){
            const {subtitle}=selection;
            return{
                title:"Plan",
                subtitle:subtitle
            }
        }
    },
    fields:[
        {
            name:"title",
            title:"Title",
            description:"title of a plan",
            type:"string",
            validation:Rule=>Rule.required()
            .min(3).max(30)
            .warning("please provide a title for this plan between 3 and 30 characters")
        },
        {
            name:"price",
            title:"Price",
            description:"price of a plan",
            type:"number",
            validation:Rule=>Rule.required()
            .min(1).max(1000000)
            .warning("please provide a price for this plan between 1 and 1000000")
        },
        {
            name:"description",
            title:"Description",
            description:"description of a plan",
            type:"text",
            validation:Rule=>Rule.required()
            .min(3).max(300)
            .warning("please provide a description for this plan between 3 and 300 characters")
        },
        {
            name:"features",
            title:"Features",
            description:"features of a plan",
            type:"array",
            of:[{type:"planFeature"}],
            validation:Rule=>Rule.required()
            .min(1).max(10)
            .warning("please provide features for this plan between 1 and 10")
        }
    ]
}