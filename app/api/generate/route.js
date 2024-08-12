import { NextReponse } from '/next/server'
import OpenAi from 'openai'

const systemPrompt = `You are a flashcard creator. Your task is to generate consice and effective flashcards based on given topic. 
Provide accurate and informative answers for the back of the card and clear questions on the front of the card.
Ensure each flashcard focuses on a single concept.
Use simple language make flashcards accessable to a wide range of learners.
Include a variety of question types, such as definitions, examples, comparisons, and applications.
Avoid overly complex or ambious phrasing in both questions and answers.
Use mnemonics or memory aids to help reinforce learning when appropriate.
Tailor difficulty level to user's specified preferences.
If given body of text, extract most important and relevant information for the cards.

Return in the following JSON format
{
    'flashcards': [
        {
            'front': str,
            'back': str
        }
    ]
}
`

export async function POST(req) {
    const openai = OpenAi()
    const data = await req.text()

    const completion = await openai.chat.completion.create({
        messages:[
            {role: 'system', content: systemPrompt},
            {role: 'user', content: data},
        ],
        model: 'gpt-4o',
        response_format:{type: 'json_object'}
    })

    const flashcards = JSON.parse(completion.choices[0].messages.content)

    return NextReponse.json(flashcards.flashcard)
}