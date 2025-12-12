import { generateSiteContent } from "@/services/geminiService";
import { PatternType } from "@/types";
import PatternImpact from "@/components/PatternImpact";

export default async function Page() {
    const content = await generateSiteContent(PatternType.IMPACT);
    return <PatternImpact content={content} />;
}
