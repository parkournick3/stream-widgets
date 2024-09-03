import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";

function Today() {
  const [searchParams] = useSearchParams();

  const color = `#${searchParams.get("color") || "000"}`;

  return <div style={{ color }}>{dayjs().format("DD/MMM").toUpperCase()}</div>;
}

export default Today;
