import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

function Past() {
  useEffect(() => {
    axios
      .get(
        "https://hacker-news.firebaseio.com/v0/item/160705.json?print=pretty"
      )
      .then((res) => {
        console.log("Past", res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <div style={{ marginLeft: "20px" }}>
      <div>
        <div>past</div>
      </div>
    </div>
  );
}

export default Past;
