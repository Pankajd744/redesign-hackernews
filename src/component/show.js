import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

function Show() {
  const [store, setStore] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/160705.json?print=pretty"
      )
      .then((res) => {
        console.log("show", res.data);
        setStore(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <div style={{ marginLeft: "20px" }}>
      <div>{store.text}</div>
      <div style={{ color: "grey" }}>
        {store.score} points by {store.by}
      </div>
    </div>
  );
}

export default Show;
