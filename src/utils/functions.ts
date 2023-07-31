export const namifySlug = (slug: string): string => {
    const words = slug.split("-");
    const transformedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return transformedWords.join(" ");
}

export function getNextMondaysSeparatedBy3Weeks(fixedReferenceDateString: string, numMondays: number): string[] {
  const todayDate: Date = new Date();
  const fixedReferenceDate: Date = new Date(fixedReferenceDateString);
  const nextMondays: string[] = [];

  const currentDayOfWeek: number = fixedReferenceDate.getDay();
  const daysUntilNextMonday: number = currentDayOfWeek === 1 ? 7 : (8 - currentDayOfWeek) % 7;
  fixedReferenceDate.setDate(fixedReferenceDate.getDate() + daysUntilNextMonday);

  const interval: number = 21;

  while (nextMondays.length < numMondays) {
    if (fixedReferenceDate > todayDate) {
      nextMondays.push(fixedReferenceDate.toISOString().slice(0, 10));
    }
    fixedReferenceDate.setDate(fixedReferenceDate.getDate() + interval);
  }

  return nextMondays;
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

export const readableDateFromString = (date: string) => {
    const newDate = new Date(date);
    return readableDate(newDate);
}