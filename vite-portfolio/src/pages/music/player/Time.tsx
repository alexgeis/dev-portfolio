import styles from "./Time.module.css";

type TimeProps = {
	time: any;
}

export const Time = ({ time }: TimeProps): JSX.Element => {
	return <h1 className={styles.time}>{time}</h1>;
};
