import React from "react";

import AddEventControl from "./hoc/AddEventControl";

import { Grid } from "@material-ui/core";

import styles from "./style.module.scss";

import EventList from "./hoc/EventsListControl";

const container = (props) => {
  return (
    <Grid container xs={12}>
      <Grid item xs={12} md={4}>
        <Grid container xs={12} className={styles.sectionContent}>
          <AddEventControl />
        </Grid>
      </Grid>

      <Grid item xs={12} md={8} className={styles.viewEventsContainer}>
        <Grid container xs={12} className={styles.sectionContent}>
          <EventList />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default container;
