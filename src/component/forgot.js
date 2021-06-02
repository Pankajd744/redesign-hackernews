import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";

function Forgot() {
  return (
    <div style={{ textAlign: "center", marginTop: "15px" }}>
      <h4>Reset your password</h4>
      <form noValidate autoComplete="off">
        <div>
          {" "}
          <TextField
            id="outlined-basic"
            label="Please Entire Your Email"
            variant="outlined"
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <Button
            variant="contained"
            style={{ marginLeft: "15px", paddingRight: "8px" }}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Forgot;
