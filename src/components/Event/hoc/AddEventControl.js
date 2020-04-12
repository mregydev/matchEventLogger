import React from "react";

import eventSpecs from "../../../eventsSpec";

import Messages from "../../../Messages";

import styles from "../style.module.scss";

import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  Button,
} from "@material-ui/core";

import { connect } from "react-redux";

import { hotkeys } from "react-keyboard-shortcuts";
import { mapStatetoProps, mapDispatchtoProps } from "./reduxConfig";

import FieldsSelectControl from "../helperControls/FieldsSelectControl";

class AddEventConntrol extends React.Component {
  constructor() {
    super();

    this.state = { fields: [], fieldsValues: {} };

    this.intializeShortCuts();
  }

  intializeShortCuts = () => {
    this.hot_keys = {};

    //Intialize inner function which adds shortcut handler
    let addtoShortCuts = (shortcut, handler) => {
      this.hot_keys[shortcut] = {
        priority: 1,
        handler,
      };
    };

    eventSpecs.forEach((event) => {
      //handling events shortcuts
      let shortcuts = event.shortcuts;

      if (shortcuts) {
        Object.keys(shortcuts).forEach((e) => {
          addtoShortCuts(e, () => {
            this.props.addEvent({
              eventType: event.value,
              ...shortcuts[e].fields,
            });
            this.resetControl();
          });
        });
      }

      //handling options shortcuts
      let fields = event.fields;

      fields.forEach((field) => {
        field.options.forEach((option) => {
          if (option.shortcut) {
            addtoShortCuts(option.shortcut, () => {
              this.updateFieldValue(field, option.value);
            });
          }
        });
      });
    });
  };

  //update state fields based on passed event
  getEventFields = (event) => {
    let fields = eventSpecs.find((e) => e.value === event.target.value).fields;

    this.setState({ fields, fieldsValues: { eventType: event.target.value } });
  };

  //update given field
  updateFieldValue = (field, value) => {
    this.setState({
      fieldsValues: { ...this.state.fieldsValues, [field.name]: value },
    });
  };

  //callback when add event button clicked
  addEvent = () => {
    this.props.addEvent(this.state.fieldsValues);

    this.resetControl();
  };

  //reset add event control
  resetControl = () => {
    this.setState({ fields: [], fieldsValues: {} });
  };

  //function to check whether given field or option can be drawn in the dom
  //this is decided by includes and excludes of this field as based in the eventSpecs fiel
  canRender = (include, exclude) => {
    if (!include && !exclude) {
      return true;
    }

    if (!this.state && !this.state.fieldsValues) {
      return false;
    }

    let checkCanRender = (constraint, isInclude) => {
      if (!constraint) {
        return true;
      }

      return Object.keys(constraint).reduce((acc, fieldName) => {
        if (fieldName === "anded") {
          return acc;
        }

        let values = constraint[fieldName];

        //check whether includes are in state fieldvalues
        //check whether excludes arenot not in state fieldvalue
        return constraint.anded
          ? isInclude
            ? acc && values.indexOf(this.state.fieldsValues[fieldName]) !== -1
            : acc && values.indexOf(this.state.fieldsValues[fieldName]) === -1
          : isInclude
          ? acc || values.indexOf(this.state.fieldsValues[fieldName]) !== -1
          : acc || values.indexOf(this.state.fieldsValues[fieldName]) === -1;
      }, constraint.anded);
    };

    return checkCanRender(exclude, false) && checkCanRender(include, true);
  };

  render() {
    return (
      <Grid container xs={12} className={styles.addEventContainer}>
        <Grid container xs={12}>
          <Grid item xs={12} className={styles.addHeader}>
            <span>{Messages.AddEventHeader}</span>
          </Grid>
        </Grid>
        <Grid container xs={12} className={styles.addEventControls}>
          <Grid item xs={12}>
            <FormControl fullWidth className={styles.FormControl}>
              <InputLabel id="eventType">
                <span className={styles.MenuItem}>{Messages.EventType}</span>
              </InputLabel>
              <Select
                labelId="eventType"
                onChange={this.getEventFields}
                value={this.state.fieldsValues.eventType || ""}
                renderValue={(selected) => (
                  <span className={styles.MenuItem}>{selected}</span>
                )}
              >
                {eventSpecs.map((e) => (
                  <MenuItem key={e.value} value={e.value}>
                    <span className={styles.MenuItem}> {e.value}</span>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <FieldsSelectControl
            fields={this.state.fields}
            fieldsValues={this.state.fieldsValues}
            canRender={this.canRender}
            updateFieldValue={this.updateFieldValue}
          />
          {this.state.fields.length ? (
            <Grid item xs={12} className={styles.addButtonContainer}>
              <Button
                onClick={this.addEvent}
                variant="contained"
                color="primary"
                className={styles.addButton}
              >
                {Messages.AddItem}
              </Button>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
    );
  }
}

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(hotkeys(AddEventConntrol));
