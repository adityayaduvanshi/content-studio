import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemMessage = `
You are an AI assistant that helps with text processing.
Process the given text according to the instruction. 
Do not include any preambles like "Summary:", "Corrected Text:", etc. 
Respond with the processed text only.

`;
export async function POST(req: NextRequest) {
  try {
    const { prompt, instruction } = await req.json();
    if (!prompt || !instruction) {
      return NextResponse.json(
        { error: 'Missing prompt or instruction' },
        { status: 400 }
      );
    }
    const userMessage = `
    Instruction: ${instruction}
    Text: ${prompt}
  `;
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',

      messages: [
        {
          role: 'system',
          //   content:
          content: systemMessage,
        },
        {
          role: 'user',
          content: userMessage,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
      //   top_p: 0.9,
      //   frequency_penalty: 0.5,
      //   presence_penalty: 0.5,
    });
    const result = completion.choices[0].message.content;
    // console.log(result);
    console.log(completion);
    console.log(result);
    return NextResponse.json({ result });
    // return NextResponse.json({ data: { result } });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Error processing with OpenAI' },
      { status: 500 }
    );
  }
}
