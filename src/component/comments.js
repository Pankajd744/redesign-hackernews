import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

function Comments() {
  const [store, setStore] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/2921983.json?print=pretty"
      )
      .then((res) => {
        console.log("ASK", res.data);
        setStore(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <div style={{ marginLeft: "20px" }}>
      <div>{store.text}</div>
      <div style={{ color: "grey" }}>by {store.by}</div>
    </div>
  );
}

export default Comments;
