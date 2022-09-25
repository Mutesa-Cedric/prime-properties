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
            type: 'markdown',
            validation: Rule => Rule.required().min(3).max(300).warning(
                'please provide a question for this FAQ'
            )
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'markdown',
            validation: Rule => Rule.required().warning(
                "you can't create this faq without an answer"
            )
        }
    ]
}