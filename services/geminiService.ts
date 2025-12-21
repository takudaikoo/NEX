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
            1. Headline (Max 5 words, catchy, English Only)
            2. Subheadline (Max 12 words, Japanese Only)
            3. Philosophy/Mission (Max 25 words, Japanese Only)
            4. Services (Array of 3 short service titles in Japanese, e.g. "動作解析", "クラウド基盤")

            Output ONLY JSON:
            {
                "headline": "...",
                "subheadline": "...",
                "mission": "...",
                "services": ["...", "...", "..."]
            }
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash', // Updated to 2.0 or whatever is standard? Legacy had 2.5-flash?
            contents: prompt,
            config: {
                responseMimeType: 'application/json'
            }
        });

        const text = response.text; // Fixed: response.text is a property in this SDK version
        if (!text) throw new Error("No response");

        return JSON.parse(text) as GeneratedContent;

    } catch (error) {
        console.error("Gemini API Error:", error);
        return getFallbackContent(pattern);
    }
};

// Chat function for Body Mechanics page
export const getChatResponse = async (message: string): Promise<string> => {
    if (!apiKey) {
        // Simulation mode response
        return "現在はシミュレーションモードで稼働中です。実際のAI分析を利用するにはAPIキーの設定が必要です。";
    }

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: `You are an elite sports biomechanics trainer AI. Answer the user's concern briefly and encouragingly. User says: "${message}"`,
        });
        return response.text || "フォームに集中しましょう。";
    } catch (e) {
        // Silent error handling
        return "システム接続に微細な遅延が発生しています。再試行してください。";
    }
};

const getFallbackContent = (pattern: PatternType): GeneratedContent => {
    switch (pattern) {
        case PatternType.CYBER:
            return {
                headline: "QUANTUM VELOCITY",
                subheadline: "ニューラルネットワークによるパフォーマンス解析",
                mission: "コードを通じて人間の潜在能力をデジタル化し、物理的限界を超える。",
                services: ["ニューラルアーキテクチャ", "予測モデリング", "リアルタイム分析"]
            };
        case PatternType.IMPACT:
            return {
                headline: "DOMINATE THE GAME",
                subheadline: "圧倒的なパワーとシリコンインテリジェンスの融合。",
                mission: "ただプレイするのではない。精密な工学で勝利を再設計する。",
                services: ["モーションキャプチャ", "力学的ベクトル解析", "怪我予防AI"]
            };
        case PatternType.FLOW:
            return {
                headline: "Seamless Intelligence",
                subheadline: "リズムとアルゴリズムが出会う場所。",
                mission: "身体とデータを調和させ、究極のフロー状態を創り出す。",
                services: ["フルスタック構築", "UX/UI エクスペリエンス", "クラウドオーケストレーション"]
            };
        default:
            return {
                headline: "Sports x IT",
                subheadline: "スポーツテクノロジーの未来。",
                mission: "ゲームを革新する。",
                services: ["サービス A", "サービス B", "サービス C"]
            };
    }
}
