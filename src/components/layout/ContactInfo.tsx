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
  <div className="flex items-center gap-4 rounded-[13px] p-3 transition-colors hover:bg-[var(--p-elevate)]">
    <div className="p-icon-chip flex-none">
      <Icon className="h-[18px] w-[18px]" />
    </div>
    <div className="min-w-0">
      <div className="font-mono text-[10.5px] uppercase tracking-wider text-[var(--p-muted)]">
        {title}
      </div>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="break-words text-[14.5px] text-[var(--p-ink)] transition-colors hover:text-[var(--p-accent)]"
        >
          {content}
        </a>
      ) : (
        <p className="break-words text-[14.5px] text-[var(--p-ink)]">{content}</p>
      )}
    </div>
  </div>
);

export default ContactInfo;
