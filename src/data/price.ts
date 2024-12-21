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
        name: "Standard plan",
        amount: 49,
        currency: "$",
        period: "/month",
        features: [
            { description: "2 team members", included: true },
            { description: "20GB Cloud storage", included: true },
            { description: "Integration help", included: true },
            { description: "Sketch Files", included: false },
            { description: "API Access", included: false },
            { description: "Complete documentation", included: false },
            { description: "24×7 phone & email support", included: false },
        ],
    },
    {
        id: 1,
        name: "Standard plan",
        amount: 49,
        currency: "$",
        period: "/month",
        features: [
            { description: "2 team members", included: true },
            { description: "20GB Cloud storage", included: true },
            { description: "Integration help", included: true },
            { description: "Sketch Files", included: false },
            { description: "API Access", included: false },
            { description: "Complete documentation", included: false },
            { description: "24×7 phone & email support", included: false },
        ],
    },
    {
        id: 1,
        name: "Standard plan",
        amount: 49,
        currency: "$",
        period: "/month",
        features: [
            { description: "2 team members", included: true },
            { description: "20GB Cloud storage", included: true },
            { description: "Integration help", included: true },
            { description: "Sketch Files", included: false },
            { description: "API Access", included: false },
            { description: "Complete documentation", included: false },
            { description: "24×7 phone & email support", included: false },
        ],
    },
];

const filteredPrices = filterPrice(prices, 20);