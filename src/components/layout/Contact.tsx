"use client";

import React from "react";
import { Send } from "lucide-react";
import { BsLinkedin } from "react-icons/bs";
import { LocateIcon, PhoneCall } from "lucide-react";
import { GiMailbox } from "react-icons/gi";
import { IconType } from "react-icons";
import ContactInfo from "./ContactInfo";
import Brackets from "./Brackets";

interface ContactInfoProps {
  icon: IconType | typeof PhoneCall | typeof LocateIcon;
  title: string;
  content: string;
  link?: string;
}

const contactInfo: ContactInfoProps[] = [
  {
    icon: BsLinkedin,
    title: "LinkedIn",
    content: "linkedin.com/in/rony-barua",
    link: "https://www.linkedin.com/in/rony-barua/",
  },
  {
    icon: PhoneCall,
    title: "Phone",
    content: "+880 1836 541335",
  },
  {
    icon: GiMailbox,
    title: "Email",
    content: "ronybarua.ethical18@gmail.com",
  },
  {
    icon: LocateIcon,
    title: "Address",
    content: "Mirpur 10, Kazipara, Dhaka, Bangladesh",
  },
];

const inputClass =
  "w-full rounded-[12px] border border-[var(--p-line)] bg-[var(--p-bg)] px-[15px] py-[13px] text-[15px] text-[var(--p-ink)] placeholder:text-[var(--p-muted-2)] transition-all focus:border-[var(--p-accent)] focus:outline-none focus:ring-[3px] focus:ring-[var(--p-accent-soft)]";
const labelClass =
  "mb-2 block font-mono text-[11px] uppercase tracking-wider text-[var(--p-muted)]";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-1 gap-[26px] lg:grid-cols-[1.2fr_0.9fr]">
      {/* ---- form ---- */}
      <div className="p-card p-8">
        <Brackets />
        <span className="p-eyebrow">{"// contact"}</span>
        <h2 className="p-heading mt-4 text-[30px]">Let&apos;s work together</h2>
        <p className="mt-2 leading-relaxed text-[var(--p-muted)]">
          Have a project in mind? Let&apos;s create something amazing together.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Rony"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="lastName" className={labelClass}>
                Last name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Barua"
                className={inputClass}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project…"
              className={`${inputClass} min-h-[130px] resize-y`}
            />
          </div>
          <button type="submit" className="p-btn mt-1 self-start">
            <Send size={15} />
            Send Message
          </button>
        </form>
      </div>

      {/* ---- reach me ---- */}
      <div className="p-card flex flex-col justify-center p-8">
        <Brackets />
        <span className="p-eyebrow mb-5">{"// reach me"}</span>
        <div className="flex flex-col gap-3">
          {contactInfo.map((info) => (
            <ContactInfo key={info.title} {...info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
