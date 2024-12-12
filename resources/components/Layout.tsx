import React from "react";
import styles from "../css/layout.module.css";

export default function Layout({ children }: { children: any }) {
    return <div className={styles.container}>{children}</div>;
}
