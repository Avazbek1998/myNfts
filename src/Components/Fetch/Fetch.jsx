/** @format */
import { useState } from "react";
import { useEffect } from "react";

function Fetch(url) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((info) => setdata(info));
  }, [url]);
  return {
    data,
  };
}

export default Fetch;

