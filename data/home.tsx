import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaXTwitter,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa6";

const iconClasses =
  "w-5 h-5 xs:w-6 xs:h-6 2xl:w-8 2xl:h-8 custom1xl:!w-8 custom1xl:!h-8";

export const socialLinks = [
  {
    icon: <FaLinkedinIn className={iconClasses} />,
    href: "https://linkedin.com/in/rudhrabharathy",
    label: "LinkedIn",
  },
  {
    icon: <FaInstagram className={iconClasses} />,
    href: "https://www.instagram.com/ig_rudhrabharathy",
    label: "Instagram",
  },
  {
    icon: <FaGithub className={iconClasses} />,
    href: "https://github.com/RudhraBharathy",
    label: "GitHub",
  },
  {
    icon: <FaXTwitter className={iconClasses} />,
    href: "https://x.com/RudhraBharathy",
    label: "Twitter",
  },
  {
    icon: <FaFacebookF className={iconClasses} />,
    href: "https://www.facebook.com/bharathyganeshan/",
    label: "Facebook",
  },
  {
    icon: <FaEnvelope className={iconClasses} />,
    href: "bharathyganeshan@gmail.com",
    label: "Email",
  },
];

type NavKey = "ABOUT" | "EXPERIENCE" | "PROJECTS" | "GALLERY" | "CONTACT";

export const navLinks: { name: NavKey; href: string }[] = [
  "ABOUT",
  "EXPERIENCE",
  "PROJECTS",
  "GALLERY",
  "CONTACT",
].map((name) => ({ name: name as NavKey, href: `/${name.toLowerCase()}` }));
