import React from "react";
import styles from "./ButtonsBox.module.css";

type Props = {
	children?: React.ReactNode;
}

export const ButtonsBox: React.FC<Props> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
