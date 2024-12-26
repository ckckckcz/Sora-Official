import type { PriceData } from "../models/price";

export function formatPrice(price: PriceData): string {
    return `${price.currency} ${price.amount.toFixed(2)}`;
}

export function filterPrice(prices: PriceData[], minAmount: number): PriceData[]{
    return prices.filter(price => price.amount >= minAmount);
}

export function formatFeatures(features: { description: string; included: boolean }[]): string {
    return features
        .map(
            (feature) =>
                `<div class="flex items-center space-x-2">
                    ${
                        feature.included
                            ? `<svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>`
                            : `<svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                </svg>`
                    }
                    <span>${feature.description}</span>
                </div>`
        )
    .join("");
}

export const prices: PriceData[] = [
    {
        id: 1,
        name: "Basic Package (3-5 Business Days)",
        amount: 40,
        currency: "$",
        period: "/project",
        features: [
            { description: "1–3 pages (Home, About, Contact).", included: true },
            { description: "Simple and responsive design", included: true },
            { description: "Pre-designed templates", included: true },
            { description: "Basic contact form.", included: true },
            { description: "Hosting and domain not included (guidance provided).", included: true },
        ],
    },
    {
        id: 2,
        name: "Standard Package (5-7 Business Days)",
        amount: 70,
        currency: "$",
        period: "/project",
        features: [
            { description: "4–6 pages (Home, About, Services, Contact, etc.).", included: true },
            { description: "Modern and responsive design", included: true },
            { description: "Social media integration + Google Maps.", included: true },
            { description: "On-page SEO (titles, descriptions).", included: true },
            { description: "Free hosting & domain for 1 year*.", included: true },
        ],
    },
    {
        id: 3,
        name: "Premium (7-10 Business Days)",
        amount: 120,
        currency: "$",
        period: "/project",
        features: [
            { description: "7-10 pages with advanced features.", included: true },
            { description: "Custom and responsive design", included: true },
            { description: "E-commerce functionality (online store with up to 10 products).", included: true },
            { description: "Free hosting & domain for 1 year*.", included: true },
            { description: "Chat integration (WhatsApp or live chat).", included: true },
        ],
    },
];

const filteredPrices = filterPrice(prices, 20);