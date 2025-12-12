import { generateSiteContent } from "@/services/geminiService";
import { PatternType } from "@/types";
import PatternCyber from "@/components/PatternCyber";

export default async function Page() {
    const content = await generateSiteContent(PatternType.CYBER);
    return <PatternCyber content={content} />;
}
