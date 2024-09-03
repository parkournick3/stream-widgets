import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Clock() {
  const [searchParams] = useSearchParams();

  const color = `#${searchParams.get("color") || "000"}`;

  const [clock, setClock] = useState(dayjs().format("HH:mm"));

  useEffect(() => {
    setInterval(() => {
      setClock(dayjs().format("HH:mm"));
    }, 1000);
  });

  return <div style={{ color }}>{clock}</div>;
}

export default Clock;
