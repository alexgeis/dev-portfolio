import styles from "./ContactItem.module.css";

type ContactItemProps = {
	// status: string;
	onClick?: React.MouseEventHandler;
	// tag: any;
    tbd: any;
}   

export const ContactItem = ({ onClick, tbd }: ContactItemProps): JSX.Element => {
	return (
		<div
			className={`${styles.contactItem} ${status === "active" ? styles.active : ""}`}
			onClick={onClick}
		>
			{tbd}
		</div>
	);
};
