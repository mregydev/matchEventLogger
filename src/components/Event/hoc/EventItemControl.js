import React, { useState } from "react";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Avatar,
} from "@material-ui/core";
import { CheckCircle, Cancel } from "@material-ui/icons";

import Messages from "../../../Messages";
import styles from "../style.module.scss";
import { connect } from "react-redux";
import { mapDispatchtoProps, mapStatetoProps } from "./reduxConfig";

const ExamViewerControl = (props) => {
  //Intialize isRemoveDialogShown using state hooks
  let [isRemoveDialogShown, showRemoveDialog] = useState(false);

  return (
    <React.Fragment>
      <Grid container>
        <Card className={styles.eventCard}>
          <CardHeader
            className={styles.cardHeader}
            title={props.event["eventType"]}
            avatar={
              <Avatar aria-label="recipe" className={styles.avatar}>
                {props.event["eventType"][0]}
              </Avatar>
            }
          ></CardHeader>
          <CardContent>
            {Object.keys(props.event).map((prop) => (
              <Grid
                className={
                  styles.eventType === "eventType" ? "eventType" : "fieldValue"
                }
                item
                xs={12}
              >
                {prop === "eventType" ? null : (
                  <div className={styles.fieldRow}>
                    <span className={styles.fieldName}>{prop} : </span>
                    <span>
                      {Array.isArray(props.event[prop])
                        ? props.event[prop].map((value) => (
                            <Chip
                              key={value}
                              color="secondary"
                              size="small"
                              label={value}
                            />
                          ))
                        : props.event[prop]}
                    </span>
                  </div>
                )}
              </Grid>
            ))}
          </CardContent>
          <CardActions>
            <Grid item xs={12} md={2}>
              <Button onClick={() => showRemoveDialog(true)} color="secondary">
                {Messages.RemoveItem}
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </Grid>

      <Dialog open={isRemoveDialogShown}>
        <DialogTitle>{Messages.DeleteConfirmTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {Messages.DeleteConfirmQuestion}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              props.removeEvent(props.index);
              showRemoveDialog(false);
            }}
            color="secondary"
          >
            <CheckCircle></CheckCircle>
          </Button>
          <Button color="secondary" onClick={() => showRemoveDialog(false)}>
            <Cancel></Cancel>
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ExamViewerControl);
