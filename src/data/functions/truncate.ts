export const truncate = (description: string, limit: number = 30): string => {
    const words = description.split(' ');
    if (words.length > limit) {
        return words.slice(0, limit).join(' ') + '...';
    }
    return description;
};
