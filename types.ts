export enum PatternType {
    CYBER = 'CYBER',
    IMPACT = 'IMPACT',
    FLOW = 'FLOW'
}

export interface NavItem {
    label: string;
    href: string;
}

export interface GeneratedContent {
    headline: string;
    subheadline: string;
    mission: string;
    services: string[]; // List of 3 service/content names
}
