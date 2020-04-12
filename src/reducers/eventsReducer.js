import { ADD_EVENT, REMOVE_EVENT } from "../actions";

export default (
  state = {
    events: [],
  },
  action
) => {
  if (action.type === ADD_EVENT) {
    return { ...state, events: [action.event, ...state.events] };
  }

  if (action.type === REMOVE_EVENT) {
    return {
      ...state,
      events: state.events.reduce((acc, el, index) => {
        if (index !== action.index) acc.push(el);
        return acc;
      }, []),
    };
  }

  return state;
};
