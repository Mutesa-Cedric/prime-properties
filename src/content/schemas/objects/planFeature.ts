// @ts-nocheck
export default {
    name: "planFeature",
    title: "Plan Feature",
    type: "object",
    preview: {
        select: {
            subtitle: "title"
        },
        prepare(selection) {
            const { subtitle } = selection;
            return {
                title: "Plan Feature",
                subtitle: subtitle
            }
        }
    },
    fields:[
        {
            name:"title",
            title:"Title",
            type:"string",
            validation:Rule=>Rule.required().min(3).max(100)
        },
        {
            name:"isAvailable",
            title:"Is Available",
            type:"boolean",
            validation:Rule=>Rule.required()
        }
    ]
}