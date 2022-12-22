import styles from "./Search.module.css";

type SearchItemProps = {
	onChange?: any; // TODO: FIND BETTER TYPE FOR ONCHANGE EVENT HANDLE
	value: string;
	placeholder: string;
}

export const Search = ({ onChange, value, placeholder }: SearchItemProps): JSX.Element => {
	return (
		<input
			type="text"
			className={styles.search}
			onChange={onChange}
			value={value}
			placeholder={placeholder}
		/>
	);
};
