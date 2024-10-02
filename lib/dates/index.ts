import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDateColumn = (val: string, format = "YYYY-MM-DD h:mm A") => {
  const dateStr = dayjs(val).tz(dayjs.tz.guess());
  return dateStr.format(format);
};
