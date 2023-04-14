/** @format */

import { useState } from "react";
import { useEffect } from "react";
function Fetch2(url) {
  const [newItem, setNewItem] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((newData) => setNewItem(newData));
  }, [url]);
  return {
    newItem,
  };
}

export default Fetch2;
