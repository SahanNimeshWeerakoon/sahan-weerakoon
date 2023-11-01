import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import Button from "./Button";

const ContactForm = ({ onClose } : { onClose: any }) => {
    const form: any = useRef(null);

  const sendEmail = async (e: any) => {
    e.preventDefault();
    let response = await emailjs.sendForm('service_3xpg59y', 'template_jfz9q3l', form?.current, '0KnZnj_U_M7WMPXjg');
    onClose(response.status ? "sent" : "notSent");
  };

    return (
        <div className="contactForm">
            <h3>CONTACT ME</h3>
            <form ref={form} onSubmit={sendEmail}>
                <div className="contactForm_group">
                    <label>Your Name</label>
                    <input type="text" name="name" />
                </div>
                <div className="contactForm_group">
                    <label>Your Emain / Your Phone Number</label>
                    <input type="text" name="contact" />
                </div>
                <div className="contactForm_group">
                    <label>Your Message</label>
                    <textarea name="message"></textarea>
                </div>
                <input type="submit" value="Send" className="btn cursor-pointer transition" />
            </form>
        </div>
    );
}

export default ContactForm;