const formatDatetime = (datetime: string) => {
  const myDatetime = new Date(JSON.parse(datetime));
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
