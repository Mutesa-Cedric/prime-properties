// @ts-nocheck
export default {
    name:"propertyFeature",
    title:"Property Feature",
    type:"object",
    preview:{
       select:{
        title:"name",
        subtitle:"value"
       },
       prepare(selection){
           const {title,subtitle}=selection;
           return{
            title:title,
            subtitle:`${subtitle} ${title}`
           }
       }
    },
    fields:[
        {
            name:"name",
            title:"Feature Name",
            type:"string",
            validation:Rule=>Rule.required().warning(
                "please provide a name for this feature"
            )
        },
        {
            name:"value",
            title:"Value",
            type:"number",
            validation:Rule=>Rule.required().warning(
                "please provide a value for this feature"
            )
        },
        {
            name:"icon",
            title:"Icon",
            type:"string",
        }
    ]
}