import React from "react";
import FoxCard from "./FoxCard";
import { Grid } from "@material-ui/core";
import foxesList from "./data";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  gridStyles: {
    marginTop: "10px"
  }
}));

const Content = () => {
  const classes = useStyles();
  const getFoxCard = foxCardObj => {
    return (
      <Grid className={classes.gridStyles} item xs={12} sm={4}>
        <FoxCard {...foxCardObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={3}>
      {foxesList.map(foxCardObj => getFoxCard(foxCardObj))}
    </Grid>
  );
};

export default Content;
