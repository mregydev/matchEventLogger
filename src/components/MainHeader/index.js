import React from "react";
import { Grid, Tooltip } from "@material-ui/core";
import { SportsSoccer, GitHub } from "@material-ui/icons";
import Messages from "../../Messages";
import styles from "./style.module.scss";

//Functional Component that draws the main application header
export default () => {
  return (
    <Grid container className={styles.appHeader}>
      <Grid item xs={12} className={styles.headerContent}>
        <Grid item xs={10}>
          <span className={styles.headerLogo}>
            <SportsSoccer />
          </span>
          <span> {Messages.AppHeader}</span>
        </Grid>
        <Grid item xs={2}>
          <Tooltip title={Messages.GithubLink}>
            <a
              href="https://github.com/mregydev/matchEventLogger"
              className={styles.githubLink}
            >
              <GitHub />
            </a>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
  );
};
