import { useEffect, useState } from "react";

const DateTime = ({ datetime }: { datetime: string }) => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);
  const [formattedTime, setFormattedTime] = useState<string | null>(null);

  useEffect(() => {
    const myDatetime = new Date(datetime);
    const modifiedDate = myDatetime.toLocaleDateString([], {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const modifiedTime = myDatetime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setFormattedDate(modifiedDate);
    setFormattedTime(modifiedTime);
  }, [datetime]);

  return (
    <div className="relative">
      <span className="sr-only">Posted on: </span>
      {formattedDate} <span aria-hidden="true">|</span>
      <span className="sr-only">&nbsp;at&nbsp;</span> {formattedTime}
    </div>
  );
};

export default DateTime;
