import { useState } from "react";
import Button from "./Button";

const ContactForm = ({ handleSubmit }: { handleSubmit: (newType: any) => void }) => {
    const [ contactData, setContactData ] = useState({ name: "", contact: "", message: "" });

    const handleInput = (e: any) => {
        setContactData(dt => {
            return {
                ...dt,
                [e.target.name]: e.target.value
            }
        });
    }

    return (
        <div className="contactForm">
            <h3>CONTACT ME</h3>
            <div className="contactForm_group">
                <label>Your Name</label>
                <input type="text" name="name" value={contactData.name} onInput={handleInput} />
            </div>
            <div className="contactForm_group">
                <label>Your Emain / Your Phone Number</label>
                <input type="text" name="contact" value={contactData.contact} onInput={handleInput} />
            </div>
            <div className="contactForm_group">
                <label>Your Message</label>
                <textarea name="message" value={contactData.message} onInput={handleInput}></textarea>
            </div>
            <Button btnTxt="SEND" onClick={() => handleSubmit(contactData)} />
        </div>
    );
}

export default ContactForm;