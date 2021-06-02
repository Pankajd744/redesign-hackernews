import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";

function Nav() {
  return (
    <div>
      <AppBar
        position="static"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Toolbar variant="dense">
          <Typography>
            <Link to="/new" style={{ color: "white", textDecoration: "none" }}>
              New
            </Link>
          </Typography>
        </Toolbar>
        <Toolbar variant="dense">
          <Typography color="inherit">
            <Link to="/past" style={{ color: "white", textDecoration: "none" }}>
              Past
            </Link>
          </Typography>
        </Toolbar>
        <Toolbar variant="dense">
          <Typography>
            <Link
              to="/comments"
              style={{ color: "white", textDecoration: "none" }}
            >
              Comments
            </Link>
          </Typography>
        </Toolbar>
        <Toolbar variant="dense">
          <Typography color="inherit">
            <Link to="/ask" style={{ color: "white", textDecoration: "none" }}>
              Ask
            </Link>
          </Typography>
        </Toolbar>
        <Toolbar variant="dense">
          <Typography>
            <Link to="/show" style={{ color: "white", textDecoration: "none" }}>
              Show
            </Link>
          </Typography>
        </Toolbar>
        <Toolbar variant="dense">
          <Typography color="inherit">
            <Link to="/job" style={{ color: "white", textDecoration: "none" }}>
              Job
            </Link>
          </Typography>
        </Toolbar>
        <Toolbar variant="dense">
          <Typography>
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              Submit
            </Link>
          </Typography>
        </Toolbar>
        <Toolbar variant="dense">
          <Typography color="inherit">
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              Login
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
