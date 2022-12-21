import styles from "./ContactFormItem.module.css";

type ContactFormItemProps = {
	// status: string;
	onClick?: React.MouseEventHandler;
	// tag: any;
    tbd: any;
}   

export const ContactFormItem = ({ onClick, tbd }: ContactFormItemProps): JSX.Element => {
	return (
		<div
			className={`${styles.ContactFormItem} ${status === "active" ? styles.active : ""}`}
			onClick={onClick}
		>
			{tbd}
		</div>
	);
};
