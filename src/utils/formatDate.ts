import { format } from "date-fns";

export function formatDate(timestamp: number | Date) {
    const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
    return format(date, 'dd/MM/yyyy HH:mm');
}