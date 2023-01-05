import { useState, useRef } from "react";
import styles from "./ContactForm.module.css";

type ContactFormProps = {
	// onClick?: React.MouseEventHandler;
};

export const ContactForm = ({}: ContactFormProps): JSX.Element => {
	const formRef = useRef();

	const INITIAL_STATE = {
		name: "",
		email: "",
		msg: "",
	};
	const [form, setForm] = useState(INITIAL_STATE);

	const handleChange = (event: any) => {
		const { id, value } = event.target;
		setForm({
			...form,
			[id]: value,
		});
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		alert(
			`${form.name}(email: ${form.email}) writes the following: ${form.msg}`
		);

		setForm(INITIAL_STATE);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className={styles.contactFormInput}
					type="text"
					placeholder="Your name"
					name="name"
					value={form.name}
					onChange={handleChange}
				/>
				<input
					className={styles.contactFormInput}
					type="email"
					placeholder="Your e-mail"
					name="email"
					value={form.email}
					onChange={handleChange}
				/>
				<textarea
					className={styles.contactFormTextArea}
					id="contactFormTextArea"
					placeholder="Write your message"
					name="message"
					value={form.msg}
					onChange={handleChange}
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
