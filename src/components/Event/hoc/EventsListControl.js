import React from "react";

import EventViewerControl from "./EventItemControl";

import { Grid } from "@material-ui/core";

import styles from "../style.module.scss";

import Messages from "../../../Messages";

import { connect } from "react-redux";

import { mapDispatchtoProps, mapStatetoProps } from "./reduxConfig";

const ExamListControl = (props) => {
  return (
    <React.Fragment>
      <Grid container xs={12}>
        <Grid item xs={12} className={styles.addHeader}>
          <span>{Messages.ViewEventsHeader}</span>
        </Grid>
      </Grid>
      <Grid container xs={12} className={styles.eventsList}>
        {props.events.length ? (
          props.events.map((event, index) => (
            <Grid item xs={12} md={5}>
              <EventViewerControl event={event} index={index} />
            </Grid>
          ))
        ) : (
          <span className={styles.NoEventsFound}>{Messages.NoEventsFound}</span>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ExamListControl);
