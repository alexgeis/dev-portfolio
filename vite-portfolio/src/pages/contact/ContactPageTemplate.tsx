import React, { useRef } from "react";
import styles from "./ContactPageTemplate.module.css";

// function Form() {
//   // Here we set two state variables for firstName and lastName using `useState`
//   // 1st variable in array = name of state variable
//   // 2nd = update method for state change
//   // useState(x)    -    x = initial value
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const handleInputChange = (e: any) => {
//     // Getting the value and name of the input which triggered the change
//     const { name, value } = e.target;

//     // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
//     return name === "firstName" ? setFirstName(value) : setLastName(value);
//   };

//   const handleFormSubmit = (e: any) => {
//     // Preventing the default behavior of the form submit (which is to refresh the page)
//     e.preventDefault();

//     // Alert the user their first and last name, clear the inputs
//     alert(`Hello ${firstName} ${lastName}`);
//     setFirstName("");
//     setLastName("");
//   };

//   return (
//     <div>
//       <p>
//         Hello {firstName} {lastName}
//       </p>
//       <form className="form">
//         <input
//           value={firstName}
//           name="firstName"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="First Name"
//         />
//         <input
//           value={lastName}
//           name="lastName"
//           onChange={handleInputChange}
//           type="text"
//           placeholder="Last Name"
//         />
//         <button type="button" onClick={handleFormSubmit}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Form;

type Props = {
	children?: React.ReactNode;
};

export const ContactPageTemplate: React.FC<Props> = ({ children }) => {
	// const emailCopyBtnRef = useRef<HTMLButtonElement>(null);
	// const emailCopyMsgRef = useRef<HTMLElement>(null);

	// const handleEmailCopyBtnClick = () => {
	// 	emailCopyBtnRef.current!.focus();
	// };

	function generateCopyMsg() {
		const emailCopyBtn: HTMLElement | null =
			document.getElementById("emailCopyButton");
		const msgDiv = document.createElement("div");
		msgDiv.classList.remove("removed");
		msgDiv.setAttribute("id", "copyEmailMsg");
		msgDiv.classList.add("copyEmailMsg");
		msgDiv.textContent = "Email copied!";

		emailCopyBtn!.textContent = "";
		emailCopyBtn!.appendChild(msgDiv);

		const timeoutAmt = 1000 * 2;
		setTimeout(() => {
			msgDiv.classList.add("removed");
			msgDiv.addEventListener("transitionend", () =>
				emailCopyBtn!.removeChild(msgDiv)
			);
			emailCopyBtn!.textContent = "COPY";
		}, timeoutAmt);
	}

	function handleCopy() {
		navigator.clipboard.writeText("siegxela@gmail.com").then(
			function () {
				// document.getElementById("heroEmail").select();
				generateCopyMsg();
				console.log("Async: Copying email to clipboard was successful!");
			},
			function (err) {
				alert("Clipboard permissions don't allow copy");
				console.error("Async: Could not copy text: ", err);
			}
		);
	}

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.contactTitle}>How can I help?</h1>
			<h2 className={styles.contactSubTitle}>
				Email:&nbsp;
				<a href="mailto:siegxela@gmail.com">siegxela@gmail.com</a> &nbsp;
				<button
					className="btn"
					id="emailCopyButton"
					// id={styles.emailCopyButton}
					onClick={handleCopy}
					// ref={emailCopyBtnRef}
				>
					COPY
				</button>
			</h2>
			<p className={styles.contactSubTitle}>
				Reach out and I'll get back to you shortly
			</p>

			{children}
		</div>
	);
};
