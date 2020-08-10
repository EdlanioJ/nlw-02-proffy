export default (time: string) => {
  const [hour, minutes] = time.split(":").map(Number);

  const timeInMinute = hour * 60 + minutes;

  return timeInMinute;
};
