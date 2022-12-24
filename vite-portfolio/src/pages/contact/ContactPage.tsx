import { useState, useEffect, useRef } from "react";

// contact
import { ContactPageTemplate } from "./ContactPageTemplate";
import { ContactFormTemplate } from "./ContactFormTemplate";

const fmtMSS = (s: number) => new Date(1000 * s).toISOString().substring(15, 19);

export const ContactPage = () => {
    //PSEUDO
    // hero
    // projects
    // contact
    
    // props
    // projects - array of objects

	// const [isPlaying, setIsPlaying] = useState(false);

	return (
		<>
			<ContactPageTemplate>
                <ContactFormTemplate>
                    <p>hi</p>
                </ContactFormTemplate>
            </ContactPageTemplate>
		</>
	);
};
