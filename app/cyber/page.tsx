import { generateSiteContent } from "@/services/geminiService";
import { PatternType } from "@/types";
import PatternCyber from "@/components/PatternCyber";

export const revalidate = 3600;

export default async function Page() {
    const content = await generateSiteContent(PatternType.CYBER);
    return <PatternCyber content={content} />;
}
