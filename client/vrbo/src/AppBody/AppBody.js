import React from "react";
import styles from "./AppBody.module.css";
function AppBody() {
  return (
    <div className={styles.appBody}>
      <div className={styles.bodyContents}>
        <div className={styles.inspired}>
          <h3>Get inspired for a family trip</h3>
          <small style={{ color: "gray" }}>
            Book homes with space, convenience and amenities
          </small>
          <p>Anurag</p>
        </div>
      </div>
    </div>
  );
}

export default AppBody;
