import React from "react";

import { Grid } from "@material-ui/core";

import styles from "./style.module.scss";

export default () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <iframe
          src="https://www.youtube.com/embed/OvK639tjQGc"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className={styles.matchPlayer}
        ></iframe>
      </Grid>
    </Grid>
  );
};
