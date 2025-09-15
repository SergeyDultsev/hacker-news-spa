export const formatUnixTime = (time: number) => {
    const months: string[] = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const timeInMillis: number = time.toString().length === 10 ? time * 1000 : time;

    const date = new Date(timeInMillis);

    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate().toString().padStart(2, '0');

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} ${month} ${year} ${hours}:${minutes}`;
}