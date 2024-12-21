export interface PriceData{
    id: number;
    name: string;
    amount: number;
    currency: string;
    period: string;
    features: { description: string; included: boolean }[];
}