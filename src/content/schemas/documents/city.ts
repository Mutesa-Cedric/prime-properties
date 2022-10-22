// @ts-nocheck
export default {
    name: "city",
    title: "City",
    type: "document",
    preview: {
        select: {
            subtitle: "name",
            media: "banner"
        },
        prepare(selection) {
            const { subtitle } = selection;
            return {
                title: "City",
                subtitle: subtitle,
                media: selection.media
            }
        }
    },
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required().min(3).max(200).warning(
                "please provide a valid name for this city"
            )
        },
        {
            name: "banner",
            title: "Banner",
            type: "image",
            validation: Rule => Rule.required().warning(
                "please provide a banner for this city"
            )
        }
    ]
}