import { FC } from 'react';

interface EmailOrPhoneProps {
    value: string;
  type: 'email' | 'call';
  children?: React.ReactNode;
}

const EmailOrPhone: FC<EmailOrPhoneProps> = ({ type, value, children }) => {
  const href = type === 'email' ? `mailto:${value}` : `tel:${value}`;

  return (
    <a href={href}>
      {children}
    </a>
  );
};

export default EmailOrPhone;