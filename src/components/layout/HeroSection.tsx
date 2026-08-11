"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDownload, FaGithub, FaFacebookF } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import ProfileImg from "../../../public/rony.png";

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/ronybarua-ethical18", label: "GitHub" },
  { Icon: BsLinkedin, href: "https://www.linkedin.com/in/rony-barua/", label: "LinkedIn" },
  { Icon: FaFacebookF, href: "https://facebook.com/", label: "Facebook" },
];

const statsData = [
  { end: 4, label: "Years of experience" },
  { end: 12, label: "Projects completed" },
  { end: 32, label: "Technologies mastered" },
  { end: 4, label: "Full-stack projects led" },
];

function HeroSection() {
  return (
    <div>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        {/* ---- text ---- */}
        <div>
          <span className="p-eyebrow">{"// hi, my name is"}</span>
          <h1 className="p-heading mt-4 text-[clamp(40px,6.2vw,72px)] leading-[1.0] tracking-[-0.045em]">
            Rony Barua
          </h1>
          <h3 className="mt-5 max-w-[34ch] text-[clamp(18px,2vw,23px)] font-medium leading-[1.4] tracking-tight text-[var(--p-muted)]">
            Backend-focused{" "}
            <b className="font-bold text-[var(--p-ink)]">Full-Stack Engineer</b> —
            building high-performance, scalable systems for 4+ years.
          </h3>
          <p className="mt-5 max-w-[52ch] leading-relaxed text-[var(--p-muted)]">
            I architect and ship production JavaScript applications end to end —
            from resilient Node/Nest backends and data layers to polished React
            frontends. I care about clean code, throughput, and shipping on time.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-[18px]">
            <a href="/RonyBarua.pdf" download>
              <button className="p-btn">
                <FaDownload size={14} />
                Download Resume
              </button>
            </a>
            <div className="flex gap-[11px]">
              {socialLinks.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-[45px] w-[45px] place-items-center rounded-[13px] border border-[var(--p-line)] text-[var(--p-muted)] transition-all duration-200 hover:-translate-y-[3px] hover:border-[var(--p-accent)] hover:bg-[var(--p-accent-soft)] hover:text-[var(--p-ink)]"
                >
                  <Icon size={17} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ---- portrait ---- */}
        <div className="order-first flex justify-center lg:order-none">
          <div className="relative aspect-square w-[min(380px,100%)]">
            <span className="absolute -top-[2px] -left-[6px] font-mono text-[10px] text-[var(--p-muted-2)]">
              01,01
            </span>
            <span className="absolute -right-[6px] bottom-6 font-mono text-[10px] text-[var(--p-muted-2)]">
              x,y
            </span>
            {/* rings */}
            <div className="absolute -inset-1 rounded-full border-[1.5px] border-dashed border-[var(--p-accent)]/55 animate-spin-slow" />
            <div className="absolute inset-5 rounded-full border border-[var(--p-line)] border-t-[var(--p-accent)] animate-spin-rev" />
            {/* photo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
              className="absolute inset-[42px] overflow-hidden rounded-full"
              style={{
                background:
                  "radial-gradient(130% 100% at 50% 8%, var(--p-portrait-a), var(--p-portrait-b) 68%)",
              }}
            >
              <Image
                src={ProfileImg}
                alt="Rony Barua"
                priority
                quality={100}
                className="h-full w-full object-cover object-top"
              />
              {/* bottom fade into the page */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--p-bg) 2%, transparent 46%)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ---- stats ---- */}
      <div
        className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-[var(--p-line)] md:grid-cols-4"
        style={{ background: "var(--p-line-soft)" }}
      >
        {statsData.map((stat) => (
          <div
            key={stat.label}
            className="relative px-6 py-6"
            style={{ background: "var(--p-surface)" }}
          >
            <div className="text-[40px] font-black leading-none tracking-[-0.035em] text-[var(--p-ink)] [font-variant-numeric:tabular-nums]">
              <CountUp end={stat.end} duration={3} />
              <span className="text-[var(--p-accent)]">+</span>
            </div>
            <div className="mt-[6px] font-mono text-[11px] tracking-wide text-[var(--p-muted)]">
              {stat.label}
            </div>
            <span
              className="absolute bottom-0 left-6 h-[2px] w-6"
              style={{ background: "var(--p-accent)", opacity: 0.5 }}
              aria-hidden
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
