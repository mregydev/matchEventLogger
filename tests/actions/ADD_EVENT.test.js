import configureStore from "redux-mock-store";
import { ADD_EVENT } from "../../src/actions";

describe("ADD_EVENT action", () => {
  test("should bind ADD_EVENT action when is called with dispatch", () => {
    let store = configureStore([])({});

    let param = { type: ADD_EVENT, data: { event: {} } };

    store.dispatch(param);

    let actions = store.getActions();

    expect(actions).toEqual([param]);
  });
});
