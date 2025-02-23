// import React from "react";
// import StyleVibe from "../../../public/styleVibe.png";
// import Image from "next/image";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import { FiGithub } from "react-icons/fi";
// import WorkCarousel from "./WorkCarousel";

// const work = [
//   {
//     id: 1,
//     type: "Full Stack",
//     title: "A Full Stack Salon Service App",
//     description:
//       "Developed StyleVibe, an app with admin, customer, and seller portals for managing profiles, services, bookings, and transactions. Integrated Stripe for secure payments with automated fee deductions and implemented a real-time booking and notification system for transactions and disputes.",
//     live: "https://stylevibe-frontend-6t6nru64j-rony-baruas-projects.vercel.app/",
//     github_client: "https://github.com/ronybarua-ethical18/stylevibe-frontend",
//     github_server: "https://github.com/ronybarua-ethical18/stylevibe-backend",
//     technologies: [
//       "Next.js",
//       "Redux",
//       "RTK Query",
//       "Express.js",
//       "MongoDB",
//       "Redis",
//       "Stripe",
//     ],
//     img: StyleVibe,
//   },
//   {
//     id: 2,
//     type: "Full Stack",
//     title: "A Strapi based project",
//     description:
//       "A responsive landing page built with Next.js and Strapi, featuring sections like About Us, Contact Us, and Blog. It combines easy content management with fast performance and SEO optimization for a professional online presence.",
//     live: "https://stylevibe-frontend-6t6nru64j-rony-baruas-projects.vercel.app/",
//     github_client: "https://github.com/ronybarua-ethical18/landing-page-strapi",
//     github_server:
//       "https://github.com/ronybarua-ethical18/strapi-server-with-nextjs",
//     technologies: ["Next.js", "Tailwind CSS", "Strapi"],
//     img: StyleVibe,
//   },
// ];

// function Work() {
//   return (
//     <div>
//       <div className="h-[600px] overflow-y-scroll">
//         {work.map((item) => (
//           <div key={item.id} className={`grid grid-cols-2 gap-10 mb-14`}>
//             <div className={`border-b`}>
//               <h1 className="text-6xl text-gray-500 mb-4">0{item.id}</h1>
//               <h1 className="text-3xl mt-2">{item.title}</h1>
//               <p className="mt-4 text-gray-300">{item.description}</p>
//               <div className="flex space-x-3 mt-4">
//                 {item.technologies.map((tech) => (
//                   <div key={tech}><p className="text-[#fe0f5d]">{tech}</p></div>
//                 ))}
//               </div>
//               <div className="flex space-x-4 mt-6">
//                 <FaExternalLinkAlt className="text-gray-400 text-2xl cursor-pointer" />
//                 <FiGithub className="text-gray-400 text-2xl cursor-pointer" />
//               </div>
//             </div>
//             {/* <Image src={item.img} alt="project image" className="rounded-md" /> */}
//             <div className="w-full"><WorkCarousel /></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Work;

// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// export function AnimatedTestimonialsDemo() {
//   const testimonials = [
//     {
//       quote:
//         "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for. he attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
//       name: "StyleVibe - Full Stack App",
//       designation: "Full stack application",
//       src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
//       name: "Michael Rodriguez",
//       designation: "CTO at InnovateSphere",
//       src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
//       name: "Emily Watson",
//       designation: "Operations Director at CloudScale",
//       src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
//       name: "James Kim",
//       designation: "Engineering Lead at DataPro",
//       src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       quote:
//         "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
//       name: "Lisa Thompson",
//       designation: "VP of Technology at FutureNet",
//       src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//   ];
//   return <AnimatedTestimonials testimonials={testimonials} />;
// }

"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { GoNorthStar } from "react-icons/go";
import { FiGithub } from "react-icons/fi";

import StyleVibeImg from "../../../public/styleVibe.png";
import StyleVibe2Img from "../../../public/styleVibe3.png";

const techStack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Framer Motion",
  "MongoDB",
  "Node.js",
];

const features = [
  {
    icon: <GoNorthStar />,
    text: "Built with Next.js, React, and TypeScript for scalability.",
  },
  {
    icon: <GoNorthStar />,
    text: "Styled using Tailwind CSS with animations powered by Framer Motion.",
  },
  {
    icon: <GoNorthStar />,
    text: "State management handled by Zustand for efficiency.",
  },
  {
    icon: <GoNorthStar />,
    text: "Validation ensured with Zod for type safety.",
  },
];

const content = [
  {
    title: "StyleVibe - A Full Stack Application",
    description: (
      <div className="w-full">
        <p className="text-lg text-gray-600">
          Developed ZenithMinds, an educational platform connecting students and
          instructors, fostering global collaboration and continuous learning.
        </p>
        <div className="space-y-4 my-8  text-white  max-w-lg">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-[#fe0f5d]">{feature.icon}</span>
              <p className="text-base">{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3  backdrop-blur-0 rounded-xl max-w-lg mx-auto">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 text-white text-sm font-medium bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
    content: (
      <div className="bg-white/5 backdrop-blur-lg border-gray-600 h-full p-4">
        <div className="h-full w-full  flex  justify-start text-white p-6 relative">
          <div>
            <h1 className="text-white font-medium text-2xl uppercase">
              This is a full stack salon app
            </h1>
            <Image
              src={StyleVibeImg}
              layout="intrinsic"
              className="object-cover absolute bottom-0 left-0 rounded-lg"
              alt="linear board demo tes"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI Powered Job Board Portal",
    description: (
      <div className="w-full">
        <>
          Developed ZenithMinds, an educational platform connecting students and
          instructors, fostering global collaboration and continuous learning.
        </>
        <div className="space-y-4 p-6  text-white  max-w-lg">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <span className="text-[#fe0f5d]">{feature.icon}</span>
              <p className="text-base">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    content: (
      <div className="bg-white/5 backdrop-blur-lg border-gray-600 h-full p-4">
        <div className="h-full w-full  flex  justify-start text-white p-6 relative">
          <div>
            <h1 className="font-medium text-2xl text-gray-100">
            Convert your files instantly
            </h1>
            <Image
              src={StyleVibe2Img}
              layout="intrinsic"
              className="object-cover absolute bottom-0 left-0 rounded-lg"
              alt="linear board demo tes"
            />
          </div>
        </div>
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}
