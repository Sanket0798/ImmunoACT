import {
    FooterYouTube,
    FooterMeta,
    FooterLinkedIn,
    FooterTwitter,
    FooterInstagram,
    FooterMail,
    FooterMap,
} from "../../public/assets/svg/Icons";

export const steps = [
    {
        number: 1,
        title: "Contact us",
        description: "Contact us to boost your brand visibility",
    },
    {
        number: 2,
        title: "Consult",
        description: "Always available to answer your questions",
    },
    {
        number: 3,
        title: "Place order",
        description: "Place your order today to proceed",
    },
    {
        number: 4,
        title: "Payment",
        description: "We accept payments in all types of banking",
    },
];

export const footerSections = {
    "I am a": [
        { name: "Patient / Caregiver", href: "#" },
        { name: "Healthcare Professional", href: "#" },
        { name: "Industry Professional", href: "#" },
    ],
    About: [
        { name: "About Us", href: "#" },
        { name: "Media", href: "#" },
        { name: "Our Team", href: "#" },
    ],
    Resources: [{ name: "Privacy Policy", href: "#" }],
};

export const contactInfo = [
    {
        name: "1st Floor, Plot R-977, TTC Industrial Area, MIDC Rabale, Navi Mumbai 400701 India.",
        href: "https://www.google.com/maps?q=1st+Floor,+Plot+R-977,+TTC+Industrial+Area,+MIDC+Rabale,+Navi+Mumbai+400701+India",
        icon: <FooterMap />,
    },
    {
        name: "helpdesk@immunoact.com",
        href: "mailto:youremail@id.com",
        icon: <FooterMail />,
    },
];

export const socialLinks = [
    {
        name: "Facebook",
        href: "#",
        icon: <FooterMeta />,
    },
    {
        name: "Instagram",
        href: "#",
        icon: <FooterInstagram />,
    },
    {
        name: "Twitter",
        href: "#",
        icon: <FooterTwitter />,
    },
    {
        name: "LinkedIn",
        href: "#",
        icon: <FooterLinkedIn />,
    },
    {
        name: "Youtube",
        href: "#",
        icon: <FooterYouTube />,
    },
];