import { GoogleGenAI } from "@google/genai";
import { PatternType, GeneratedContent } from "../types";

const apiKey = process.env.API_KEY;
let ai: any = null;
if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
}

export const generateSiteContent = async (pattern: PatternType): Promise<GeneratedContent> => {
    if (!apiKey) {
        return getFallbackContent(pattern);
    }

    try {
        let stylePrompt = "";
        let contextPrompt = "";

        switch (pattern) {
            case PatternType.CYBER:
                stylePrompt = "Cyberpunk, futuristic, data-driven, matrix-like.";
                contextPrompt = "For an 'AI Solutions' consulting firm.";
                break;
            case PatternType.IMPACT:
                stylePrompt = "Aggressive, bold, high-energy, competitive.";
                contextPrompt = "For a 'Body Mechanics' sports biomechanics improvement service.";
                break;
            case PatternType.FLOW:
                stylePrompt = "Sophisticated, fluid, intelligent, seamless.";
                contextPrompt = "For a 'Dev Management' web development and support agency.";
                break;
        }

        const prompt = `
            You are a copywriter. ${contextPrompt}
            Style: "${stylePrompt}".
            
            Generate:
            1. Headline (Max 5 words, catchy)
            2. Subheadline (Max 12 words)
            3. Philosophy/Mission (Max 25 words)
            4. Services (Array of 3 short service titles, e.g. "Motion Analysis", "Cloud Infra")

            Output ONLY JSON:
            {
                "headline": "...",
                "subheadline": "...",
                "mission": "...",
                "services": ["...", "...", "..."]
            }
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: 'application/json'
            }
        });

        const text = response.text;
        if (!text) throw new Error("No response");

        return JSON.parse(text) as GeneratedContent;

    } catch (error) {
        console.error("Gemini API Error:", error);
        return getFallbackContent(pattern);
    }
};

// Chat function for Body Mechanics page
export const getChatResponse = async (message: string): Promise<string> => {
    if (!apiKey) return "AI connection offline. (API Key required)";

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `You are an elite sports biomechanics trainer AI. Answer the user's concern briefly and encouragingly. User says: "${message}"`,
        });
        return response.text || "Let's focus on your form.";
    } catch (e) {
        return "System overload. Try again.";
    }
};

const getFallbackContent = (pattern: PatternType): GeneratedContent => {
    switch (pattern) {
        case PatternType.CYBER:
            return {
                headline: "QUANTUM VELOCITY",
                subheadline: "Decoding athlete performance through neural networks.",
                mission: "To digitize human potential and transcend physical limitations through code.",
                services: ["Neural Architecture", "Predictive Modeling", "Real-time Analytics"]
            };
        case PatternType.IMPACT:
            return {
                headline: "DOMINATE THE GAME",
                subheadline: "Raw power meets silicon intelligence.",
                mission: "We don't just play. We re-engineer victory with absolute precision.",
                services: ["Motion Capture", "Force Vector Analysis", "Injury Prevention"]
            };
        case PatternType.FLOW:
            return {
                headline: "Seamless Intelligence",
                subheadline: "Where rhythm meets algorithm.",
                mission: "Harmonizing body and data to create the perfect state of flow.",
                services: ["Full-Stack Architecture", "UX/UI Experience", "Cloud Orchestration"]
            };
        default:
            return {
                headline: "Sports x IT",
                subheadline: "The future of sports technology.",
                mission: "Innovating the game.",
                services: ["Service A", "Service B", "Service C"]
            };
    }
}