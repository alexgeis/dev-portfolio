import { useState, useEffect, useRef } from "react";

// contact
import { ContactPageTemplate } from "./ContactPageTemplate";
import { ContactFormTemplate } from "./ContactFormTemplate";
import { ContactForm } from "./ContactForm";

// placerholder
import { WorkInProgressPage } from "../WIP/WIP";

const fmtMSS = (s: number) =>
	new Date(1000 * s).toISOString().substring(15, 19);

export const ContactPage = () => {
	return (
		<>
			<ContactPageTemplate>
				<ContactFormTemplate>
					{/* <WorkInProgressPage/> */}
					<ContactForm />
				</ContactFormTemplate>
			</ContactPageTemplate>
		</>
	);
};
