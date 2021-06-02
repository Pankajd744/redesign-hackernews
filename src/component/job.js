import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";

function Job() {
  const [store, setStore] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/192327.json?print=pretty"
      )
      .then((res) => {
        console.log("jobs", res.data);
        setStore(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <div style={{ marginLeft: "20px" }}>
      <div>{store.title}</div>
      <div style={{ color: "grey" }}>
        {store.score} points by {store.by}
      </div>
    </div>
  );
}

export default Job;
