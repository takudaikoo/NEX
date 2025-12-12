import { generateSiteContent } from "@/services/geminiService";
import { PatternType } from "@/types";
import PatternFlow from "@/components/PatternFlow";

export default async function Page() {
    const content = await generateSiteContent(PatternType.FLOW);
    return <PatternFlow content={content} />;
}
