import { generateSiteContent } from "@/app/actions";
import PatternCyber from "@/components/PatternCyber";

export const revalidate = 3600;

export default async function Page() {
    // Ensuring 'cyber' is passed as a string if generateSiteContent expects a string, 
    // or keep PatternType.CYBER if that's what the server action expects. 
    // Based on previous files, it seems valid to use the string.
    const content = await generateSiteContent('cyber');
    return <PatternCyber content={content} />;
}
