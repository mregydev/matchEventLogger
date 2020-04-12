import configureStore from "redux-mock-store";
import { REMOVE_EVENT } from "../../src/actions";

describe("REMOVE_EVENT action", () => {
  test("should bind REMOVE_EVENT action when is called with dispatch", () => {
    let store = configureStore([])({});

    let param = { type: REMOVE_EVENT, data: { event: {} } };

    store.dispatch(param);

    let actions = store.getActions();

    expect(actions).toEqual([param]);
  });
});
