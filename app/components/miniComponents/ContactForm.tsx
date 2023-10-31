import { useState } from "react";

const ContactForm = () => {
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
            <div>
                <label>Your Name</label>
                <input type="text" name="name" value={contactData.name} />
            </div>
            <div>
                <label>Your Name</label>
                <input type="text" name="contact" value={contactData.contact} />
            </div>
            <div>
                <label>Your Name</label>
                <textarea name="message" value={contactData.message}></textarea>
            </div>
        </div>
    );
}

export default ContactForm;