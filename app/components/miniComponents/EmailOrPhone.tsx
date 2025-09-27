import { FC } from 'react';


interface EmailOrPhoneProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const EmailOrPhone: FC<EmailOrPhoneProps> = ({ icon, text, href }) => {

  return (
    <a className="expand-button" href={href}>
      <span className="label">{text}</span>
      <span className="icon">{icon}</span>
    </a>
  );
};

export default EmailOrPhone;