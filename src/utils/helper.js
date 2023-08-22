import moment from "moment";

export const convertDuration = (totalMinutes) => {
  const duration = moment.duration(totalMinutes, 'minutes');
  const hours = duration.hours();
  const minutes = duration.minutes();

  return `${hours < 10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}`;
}