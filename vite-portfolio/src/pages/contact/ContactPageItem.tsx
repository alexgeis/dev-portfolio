import styles from "./ContactPageItem.module.css";

type ContactPageItemProps = {
	// status: string;
	onClick?: React.MouseEventHandler;
	// tag: any;
    tbd: any;
}   

export const ContactPageItem = ({ onClick, tbd }: ContactPageItemProps): JSX.Element => {
	return (
		<div
			className={`${styles.ContactPageItem} ${status === "active" ? styles.active : ""}`}
			onClick={onClick}
		>
			{tbd}
		</div>
	);
};
