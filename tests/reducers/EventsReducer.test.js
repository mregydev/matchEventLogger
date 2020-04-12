import reducer from "../../src/reducers/eventsReducer";

import { ADD_EVENT, REMOVE_EVENT } from "../../src/actions";

describe("reducer test cases", () => {
  const state = {
    events: [],
  };

  test("Should hamdle ADD_EVENT correclty", () => {
    let event = { eventType: "pass" };

    let newState = reducer(state, {
      type: ADD_EVENT,
      event,
    });

    expect(newState.events.length).toEqual(1);
  });

  test("Should hamdle REMOVE_EVENT correclty", () => {
    let newState = reducer(state, {
      type: REMOVE_EVENT,
      index: 0,
    });

    expect(newState.events.length).toEqual(0);
  });
});
