import styles from "./ContactForm.module.css";

type ContactFormProps = {
	// status: string;
	onClick?: React.MouseEventHandler;
	// tag: any;
	tbd: any;
};

export const ContactForm = ({ onClick }: ContactFormProps): JSX.Element => {
	return (
		<div>
			<form action="">
				<input
					className={styles.contactFormInput}
					type="text"
					placeholder="Your name"
					name="name"
				/>
				<input
					className={styles.contactFormInput}
					type="email"
					placeholder="Your e-mail"
					name="email"
				/>
				<textarea
					className={styles.contactFormTextArea}
					id="contactFormTextArea"
					placeholder="Write your message"
					name="message"
				></textarea>
				<input
					className={styles.contactFormSubmit}
					type="submit"
					value="Send"
				/>
			</form>
		</div>
		// <div
		// 	className={`${styles.ContactForm} ${status === "active" ? styles.active : ""}`}
		// 	onClick={onClick}
		// >

		// 	<form>
		// 		<input className="Contact_input__fWz9j" type="text" placeholder="Your name" name="name">
		// 		<input className="Contact_input__fWz9j" type="email" placeholder="Your e-mail" name="email">
		// 		<textarea className="Contact_textarea__8QEdX" placeholder="Write your message" name="message"></textarea>
		// 		<input className="Contact_submit__M6RFg" type="submit" value="Send">

		// 	</form>
		// </div>
	);
};
