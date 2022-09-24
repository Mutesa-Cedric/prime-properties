export default {
    name:"feature",
    title:"Property Feature",
    type:"object",
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