export const formatUnixTime = (time: number) => {
  const months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const timeInMillis: number =
    time.toString().length === 10 ? time * 1000 : time;

  const date = new Date(timeInMillis);

  const year: number = date.getFullYear();
  const month: string = months[date.getMonth()];
  const day: string = date.getDate().toString().padStart(2, '0');
  const hours: string = date.getHours().toString().padStart(2, '0');
  const minutes: string = date.getMinutes().toString().padStart(2, '0');

  return `${year} ${month} ${day} ${hours}:${minutes}`;
};
