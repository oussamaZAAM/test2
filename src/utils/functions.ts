export const namifySlug = (slug: string): string => {
    const words = slug.split("-");
    const transformedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return transformedWords.join(" ");
}

export const readableDate = (date: Date) => {
    const monthNames = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = monthNames[date.getMonth()];
    const year = String(date.getFullYear());

    return `${day} ${month} ${year}`;
}