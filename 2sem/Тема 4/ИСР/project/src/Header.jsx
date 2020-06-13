import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CakeIcon from "@material-ui/icons/Cake";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}));
const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.typographyStyles}>vNorke</Typography>
        <CakeIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
