// @ts-nocheck
export default {
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    preview: {
        select: {
            title: 'question',
            subtitle: 'answer'
        },
        prepare({ title, subtitle }) {
            return {
                title: title,
                subtitle: subtitle
            }
        }
    },
    fields: [
        {
            name: 'question',
            title: 'Question',
            type: 'text',
            validation: Rule => Rule.required().min(3).max(300).warning(
                'please provide a question for this FAQ'
            )
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'text',
            validation: Rule => Rule.required().warning(
                "you can't create this faq without an answer"
            )
        },
        {
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "General", value: "general" },
                    { title: "Rent Property", value: "rentProperty" },
                    { title: "Buying Property", value: "buyingProperty" },
                    { title: "Selling Property", value: "sellingProperty" },
                    { title: "Terms & Conditions", value: "termsAndConditions" },
                    { title: "Account Info", value: "accountInfo" },
                    { title: "others", value: "others" }
                ]
            }
        }
    ]
}