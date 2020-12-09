import { useState, useEffect } from "react";

export default function Stats() {
  const [stats, setStats] = useState({});
  const API = "https://tweet2pic.herokuapp.com/stats"
//   const API = "http://localhost:5000/stats";

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        setStats(data);
      });
  });
  return (
    <h5
      style={{
        opacity: 0,
        left: 0,
        right: 0,
        position: "absolute",
      }}
      className={`is-size-5 has-text-centered my-6 ${Object.keys(stats).length !== 0 ? "fadeIn":""}`}
    >
      We have converted <span className="has-text-primary">{stats.value}</span> tweets to images
    </h5>
  );
}