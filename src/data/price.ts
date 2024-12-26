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
        name: "Basic Landing Page",
        amount: 40,
        currency: "$",
        period: "/project",
        features: [
            { description: "Single-page design", included: true },
            { description: "Pre-designed templates", included: true },
        ],
    },
    {
        id: 2,
        name: "Basic Business Website",
        amount: 70,
        currency: "$",
        period: "/project",
        features: [
            
        ],
    },
    {
        id: 3,
        name: "Ultimate Website",
        amount: 120,
        currency: "$",
        period: "/project",
        features: [
            
        ],
    },
];

const filteredPrices = filterPrice(prices, 20);