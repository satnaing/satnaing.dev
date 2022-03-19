const formatDatetime = (datetime: string) => {
  // const DATE_CONSTANT = "3/19/2022, 9:09:46 PM";
  const myDatetime = new Date(datetime);
  const formattedDatetime =
    myDatetime.toLocaleDateString([], {
      year: "numeric",
      month: "long",
      day: "numeric",
    }) +
    " | " +
    myDatetime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return formattedDatetime;
};

export default formatDatetime;
