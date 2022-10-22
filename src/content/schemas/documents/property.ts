// @ts-nocheck
export default {
    name: "property",
    title: "Property",
    type: "document",
    preview: {
        select: {
            title: "name",
            subtitle: "price",
            media: "bannerImage"
        },
        prepare(selection) {
            const { title, subtitle, media } = selection;
            return {
                title: title,
                subtitle: `$${subtitle}`,
                media: media
            }
        }
    },
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            description: "Name of the property",
            validation: Rule => Rule.required()
        },
        {
            name: "price",
            title: "Price",
            description: "price of property in number(will be taken as US dollars)",
            type: "number",
            validation: Rule => Rule.required().warning(
                "you must provide the price"
            )
        },
        {
            name: "overview",
            title: "Overview",
            description: "describe your property",
            type: "text",
            validation: Rule => Rule.required().min(3).max(1000).warning(
                "you must describe your property in not less than 3 characters and not more than 300 characters"
            )
        },
        {
            name: "address",
            title: "Address",
            type: "geopoint",
            description: "address of the property",
            validation: Rule => Rule.required().warning(
                "you must provide the address of the property"
            )
        },

        {
            name: "features",
            title: "Property Features",
            description: "features of your property",
            type: "array",
            of: [{ type: "propertyFeature" }],
            validation: Rule => Rule.required()
        },
        {
            name: "bannerImage",
            title: "Banner Image",
            type: "image",
            validation: Rule => Rule.required().warning(
                "please provide a banner image"
            )
        },
        {
            name: "gallery",
            title: "Property Gallery",
            type: "array",
            of: [{ type: "image" }],
            validation: Rule => Rule.required().min(3).max(12).warning(
                "please provide images between 3 and 12"
            )
        },
        {
            name: "videos",
            title: "Property Videos",
            description: "provide links to hosted videos",
            type: "array",
            of: [{ type: "video" }]
        },
        {
            name: "status",
            title: "Status",
            type: "string",
            options: {
                list: [
                    { title: "For Sale", value: "forSale" },
                    { title: "For Rent", value: "forRent" },
                    { title: "Sold", value: "sold" },
                    { title: "Rented", value: "rented" }
                ]
            },
            validation: Rule => Rule.required().warning(
                "please provide the status of the property"
            )
        },
        {
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "House", value: "house" },
                    { title: "Apartment", value: "apartment" },
                    { title: "Condo", value: "condo" },
                    { title: "Villa", value: "villa" },
                    { title: "Land", value: "land" },
                    { title: "Commercial", value: "commercial" }
                ]
            },
            validation: Rule => Rule.required().warning(
                "please provide the category of the property"
            )
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: (doc) => {
                    return `properties/${doc.name}`;
                },
                slugify: (input: string) =>
                    input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            },
            validation: Rule => Rule.required().warning(
                "please provide a slug"
            )
        },
        {
            name: "likedBy",
            title: "Liked By",
            type: "array",
            of: [{ type: "string" }]
        }
    ],
    initialValue: {
        likedBy: []
    }
}