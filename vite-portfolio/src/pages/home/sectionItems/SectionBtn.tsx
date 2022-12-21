import styles from "./SectionBtn.module.css";
import { NavLink } from "react-router-dom";

type SectionBtnProps = {
    title: string;
    to: string;
}

export const SectionBtn = ({title, to}: SectionBtnProps): JSX.Element => {
	return (
		<div
			className={styles.wrapper}
		>
            <NavLink 
                to={to}>
            <button className={styles.btn}>{title}</button>
            </NavLink>
		</div>
	);
};
