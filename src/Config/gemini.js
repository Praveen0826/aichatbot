



import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = process.env.GEMINI_API_KEY || "AIzaSyAnGJBRlC39Hfl52yxDH3DTFCySZUJgZ4Y";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    try {
      const result = await chatSession.sendMessage(prompt);
      console.log("API Response:", result.response.text); // Log the API response
      return result.response.text;
    } catch (error) {
      console.error("Error during API call:", error);
      throw new Error("Failed to fetch response from the Generative AI API");
    }
  }
  
  export default run;
  