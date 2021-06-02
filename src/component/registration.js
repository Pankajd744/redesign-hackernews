import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";

function Registration() {
  return (
    <div style={{ textAlign: "center", marginTop: "15px" }}>
      <h4>Registration</h4>
      <form noValidate autoComplete="off">
        <div>
          {" "}
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </div>
        <div style={{ marginTop: "10px" }}>
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </div>
        <div style={{ marginTop: "10px" }}>
          <Button
            variant="contained"
            style={{ marginLeft: "15px", paddingRight: "8px" }}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
