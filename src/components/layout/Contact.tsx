import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { BsEnvelope, BsLinkedin } from "react-icons/bs";
import { LocateIcon, PhoneCall } from "lucide-react";
import { GiMailbox } from "react-icons/gi";
import { IconType } from "react-icons";
import ContactInfo from "./ContactInfo";

interface ContactInfoProps {
  icon: IconType | typeof PhoneCall | typeof LocateIcon;
  title: string;
  content: string;
  link?: string;
}

interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const contactInfo: ContactInfoProps[] = [
    {
      icon: BsLinkedin,
      title: "LinkedIn",
      content: "https://www.linkedin.com/in/rony-barua",
      link: "https://www.linkedin.com/in/rony-barua/",
    },
    {
      icon: PhoneCall,
      title: "Phone",
      content: "+880 1836541335",
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const data: Partial<ContactData> = {};

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        data[key as keyof ContactData] = value;
      }
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  w-[80%] m-auto sixteen-hundred:w-[90%]">
      <div className="w-full shadow-md hover:bg-[#08082d] bg-white/5 transition-all duration-300 ease-linear backdrop-blur-xl rounded-xl p-8 border border-gray-600">
        <h1 className="text-4xl text-white font-semibold">
          Let's work together
        </h1>
        <p className="text-gray-500 mt-4">
          Have a project in mind? Let's create something amazing together!
        </p>

        <form onSubmit={handleSubmit} className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Input
              type="text"
              name="firstName"
              placeholder="First name"
              className="bg-gray-600 border-none h-12"
            />
            <Input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="bg-gray-600 border-none h-12"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              className="bg-gray-600 border-none h-12"
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="bg-gray-600 border-none h-12"
            />
          </div>

          <Textarea
            name="message"
            rows={8}
            className="mt-8 bg-gray-600 border-none sixteen-hundred:h-28"
            placeholder="Type your message here..."
          />

          <Button
            type="submit"
            variant="outline"
            className="bg-transparent rounded-md border-[#fe0f5d] text-white flex items-center gap-2 hover:bg-[#fe0f5d] hover:text-white mt-8 group"
          >
            <BsEnvelope className="text-[#fe0f5d] group-hover:text-white" />
            Send Message
          </Button>
        </form>
      </div>

      <div className="w-full flex flex-col justify-center">
        {contactInfo.map((info, index) => (
          <ContactInfo key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
