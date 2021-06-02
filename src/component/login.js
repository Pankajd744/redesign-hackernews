import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import Registration from "./registration";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "15px" }}>
      <h4>Ycombinator</h4>
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
            Login
          </Button>
          <Link to="/forgot" style={{ paddingLeft: "5px" }}>
            Forget your password?
          </Link>
        </div>
      </form>
      <Registration />
    </div>
  );
}

export default Login;
