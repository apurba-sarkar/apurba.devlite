export function dateparser(time) {
  // const timestamp = new Date(time);

  // const year = timestamp.getFullYear();
  // const month = ("0" + (timestamp.getMonth() + 1)).slice(-2); // Adding leading zero if needed
  // const day = ("0" + timestamp.getDate()).slice(-2); // Adding leading zero if needed

  // return `${year}-${month}-${day}`;

  const year = time.slice(0, 4);
  const month = time.slice(5, 7);
  const day = time.slice(8, 10);

  const newDate = new Date(year, month - 1, day);

  // Get month name abbreviation
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthAbbr = monthNames[newDate.getMonth()];
  const formattedDay = (newDate.getDate() < 10 ? "0" : "") + newDate.getDate();
  return monthAbbr + " " + formattedDay + ", " + newDate.getFullYear();
}
