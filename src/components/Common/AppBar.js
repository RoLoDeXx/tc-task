import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },

  bar: {
    backgroundColor: "#0086fe",
  },

  title: {
    flexGrow: 1,
    background:
      "url(https://truecaller.blog/wp-content/uploads/2017/04/truecaller-logo-white-e21aa38-e1491987638993.png)",
    backgroundSize: "140px auto",
    backgroundPosition: "left center",
    backgroundRepeat: "no-repeat",
    display: "block",
    width: "140px",
    height: "35px",
  },

  txtTransparent: {
    color: "transparent",
    "&:hover": {
      color: "transparent",
    },
  },
}));

export default function MenuBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.txtTransparent}>
              truecaller home
            </Link>
          </Typography>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
