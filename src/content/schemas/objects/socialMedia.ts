// @ts-nocheck
export default {
    name: "socialMedia",
    title: "Social Media",
    type: "object",
    preview: {
        select: {
            title: "name",
            subtitle: "url"
        },
    },
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            options: {
               list:[
                {title:"Instagram",value:"instagram"},
                {title:"LinkedIn",value:"linkedIn"},
                {title:"Skype",value:"skype"},
                {title:"Twitter",value:"twitter"},
                {title:"Pinterest",value:"pinterest"},
               ]
            },
            description: "name of social media",
            validation: (Rule) => Rule.required().warning(
                "please choose name of the social media"
            ),
        },
        {
            name: "url",
            title: "URL",
            type: "url",
            validation: (Rule) => Rule.required().warning(
                "please provide a url for this social media"
            ),
        }
    ]
}