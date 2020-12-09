import { useState, useEffect } from "react";

export default function Stats() {
  const [stats, setStats] = useState({});
  const API = "https://tweet2pic.herokuapp.com/stats"
//   const API = "http://localhost:5000/stats";

  useEffect(() => {
    fetch(API)
      .then((r) => {
          if(r.status === 200) return r.json()
          throw Error("An Error Occured. Try Again Later");
        })
      .then((data) => { 
        setStats(data);
      }).catch(()=>{

      });
  },[]);
  return (
    <h4
      style={{
        opacity: 0,
        left: 0,
        right: 0,
        position: "absolute",
      }}
      className={`is-size-5 has-text-centered my-6 ${Object.keys(stats).length !== 0 ? "fadeIn":""}`}
    >
      We have converted <span className="has-text-primary">{stats.value}</span> tweets to images
    </h4>
  );
}
