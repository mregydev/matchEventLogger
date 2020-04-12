import React from "react";

import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  ListItemText,
  Checkbox,
} from "@material-ui/core";

import styles from "../style.module.scss";

//functional componenet for drawing select controls for coming fields based on their options
export default (props) => {
  return (
    <React.Fragment>
      {props.fields.map((field) =>
        props.canRender(field.include, field.exclude) ? (
          <Grid item xs={12}>
            <FormControl fullWidth className={styles.FormControl}>
              <InputLabel id={`${field.name}_id`}>
                <span className={styles.MenuItem}>{field.name}</span>
              </InputLabel>
              <Select
                labelId={`${field.name}_id`}
                onChange={(e) => props.updateFieldValue(field, e.target.value)}
                value={
                  props.fieldsValues[field.name] ||
                  (field.type === "multiple" ? [] : "")
                }
                multiple={field.type === "multiple"}
                renderValue={(selected) =>
                  field.type === "multiple" ? selected.join(", ") : selected
                }
              >
                {field.options.map((option) =>
                  props.canRender(option.include, option.exclude) ? (
                    <MenuItem key={option.value} value={option.value}>
                      {field.type === "multiple" ? (
                        <React.Fragment>
                          <Checkbox
                            checked={
                              props.fieldsValues[field.name]
                                ? props.fieldsValues[field.name].indexOf(
                                    option.value
                                  ) > -1
                                : false
                            }
                          />
                          <ListItemText primary={option.value} />
                        </React.Fragment>
                      ) : (
                        option.value
                      )}
                    </MenuItem>
                  ) : null
                )}
              </Select>
            </FormControl>
          </Grid>
        ) : null
      )}
    </React.Fragment>
  );
};
