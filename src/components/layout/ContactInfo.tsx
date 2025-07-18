import React from "react";
import { LocateIcon, PhoneCall } from "lucide-react";
import { IconType } from "react-icons";

interface ContactInfoProps {
  icon: IconType | typeof PhoneCall | typeof LocateIcon;
  title: string;
  content: string;
  link?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  icon: Icon,
  title,
  content,
  link,
}) => (
  <div className="flex space-x-6 mb-10">
    <div className="bg-white/5 backdrop-blur-lg flex items-center justify-center w-16 h-16 rounded-lg">
      <Icon className="text-[#fe0f5d] text-base" />
    </div>
    <div>
      <h2 className="text-gray-500">{title}</h2>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#fe0f5d] transition-colors"
        >
          {content}
        </a>
      ) : (
        <p>{content}</p>
      )}
    </div>
  </div>
);

export default ContactInfo;
