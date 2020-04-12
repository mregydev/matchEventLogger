import React from "react";

import EventsSection from "./components/Event";

import MainHeader from "./components/MainHeader";

import { Provider } from "react-redux";

import store from "./store";

import { Container } from "@material-ui/core";

import MatchViewer from "./components/MatchViewer";

import styles from "./styles/main.module.scss";

function App() {
  return (
    <Provider store={store}>
      <Container disableGutters={true} className={styles.appContainer}>
        <MainHeader />
        <MatchViewer />

        <EventsSection />
      </Container>
    </Provider>
  );
}

export default App;
