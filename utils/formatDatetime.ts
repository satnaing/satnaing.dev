import { useEffect, useState } from "react";

const formatDatetime = (datetime: string) => {
  const [formattedDatetime, setFormattedDatetime] = useState<string | null>(
    null
  );

  useEffect(() => {
    const myDatetime = new Date(datetime);
    const modifiedDatetime =
      myDatetime.toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) +
      " | " +
      myDatetime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setFormattedDatetime(modifiedDatetime);
  }, []);

  return formattedDatetime;
};

export default formatDatetime;
