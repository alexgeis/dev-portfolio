import { useState, useEffect, useRef } from "react";

// contact
import { ContactPageTemplate } from "./ContactPageTemplate";
import { ContactFormTemplate } from "./ContactFormTemplate";
import { ContactForm } from "./ContactForm";

// placerholder
import { WorkInProgressPage } from "../WIP/WIP";

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
