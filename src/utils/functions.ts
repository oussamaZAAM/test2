export const namifySlug = (slug: string): string => {
    const words = slug.split("-");
    const transformedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return transformedWords.join(" ");
}