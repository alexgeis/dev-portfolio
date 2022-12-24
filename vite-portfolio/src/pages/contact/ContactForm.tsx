import styles from "./ContactForm.module.css";

type ContactFormProps = {
	// status: string;
	onClick?: React.MouseEventHandler;
	// tag: any;
    tbd: any;
}   

export const ContactForm = ({ onClick, tbd }: ContactFormProps): JSX.Element => {
	return (
		<div
			className={`${styles.ContactForm} ${status === "active" ? styles.active : ""}`}
			onClick={onClick}
		>
			{tbd}
		</div>
	);
};
