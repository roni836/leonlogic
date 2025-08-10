// libs/gemini.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("❌ Missing GEMINI_API_KEY in environment variables");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Common function to generate text
export async function generateText(prompt: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
  return result.response.text();
}
