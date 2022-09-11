import React from "react";

import { Header } from "../../components/Header/Header";
import MediaQuery from "react-responsive";
import styles from "./Homepage.module.css";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
const Homepage = () => {
  return (
    <div className={styles.container}>
      <MediaQuery minWidth={780}>
        <Header />
      </MediaQuery>
      <MediaQuery maxWidth={780}>
        <BottomNavigation />
      </MediaQuery>
    </div>
  );
};

export default Homepage;
