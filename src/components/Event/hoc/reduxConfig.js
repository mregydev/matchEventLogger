import { ADD_EVENT, REMOVE_EVENT } from "../../../actions";

const mapStatetoProps = (state) => {
  return {
    events: state && state.eventsReducer ? state.eventsReducer.events : [],
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    addEvent: (event) =>
      dispatch({
        type: ADD_EVENT,
        event,
      }),

    removeEvent: (index) =>
      dispatch({
        type: REMOVE_EVENT,
        index,
      }),
  };
};

export { mapDispatchtoProps, mapStatetoProps };
