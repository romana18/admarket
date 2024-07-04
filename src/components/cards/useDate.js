import { parseISO, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';

export function getRelativeTime(timestamp) {
    const date = parseISO(timestamp);
    const now = new Date();

    const secondsDifference = differenceInSeconds(now, date);
    const minutesDifference = differenceInMinutes(now, date);
    const hoursDifference = differenceInHours(now, date);
    const daysDifference = differenceInDays(now, date);

    if (secondsDifference < 60) {
        return `${secondsDifference} ${secondsDifference === 1 ? 'second' : 'seconds'} ago`;
    } else if (minutesDifference < 60) {
        return `${minutesDifference} ${minutesDifference === 1 ? 'minute' : 'minutes'} ago`;
    } else if (hoursDifference < 24) {
        return `${hoursDifference} ${hoursDifference === 1 ? 'hour' : 'hours'} ago`;
    } else {
        return `${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago`;
    }
}
