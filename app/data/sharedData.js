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
  // {
  //   name: "Facebook",
  //   href: "#",
  //   icon: <FooterMeta />,
  // },
  // {
  //   name: "Instagram",
  //   href: "#",
  //   icon: <FooterInstagram />,
  // },
  // {
  //   name: "Twitter",
  //   href: "#",
  //   icon: <FooterTwitter />,
  // },
  // {
  //   name: "LinkedIn",
  //   href: "#",
  //   icon: <FooterLinkedIn />,
  // },
  // {
  //   name: "Youtube",
  //   href: "#",
  //   icon: <FooterYouTube />,
  // },

  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61563446237123",
    icon: <FooterMeta />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/actimmuno/",
    icon: <FooterInstagram />,
  },
  {
    name: "Twitter",
    href: "https://x.com/ActImmuno",
    icon: <FooterTwitter />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/77707171/admin/dashboard/",
    icon: <FooterLinkedIn />,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@immunoact4858",
    icon: <FooterYouTube />,
  },
];

export const questions = [
  {
    question: "What is Leukapheresis and how does NexCAR19 involve it?",
    answer: `This is the process by which a patient's immune-effector cells are extracted through a
  machine . A bag of these extracted cells is transported under refrigerated conditions to
  ImmunoACT. From these, At our facility, we select and activate T-cells on which we
  manufacture NexCAR19. To be delivered for infusion to the patient.`,
  },
  {
    question: "Why does it take a few weeks for NexCAR19 to be administered?",
    answer:
      "NexCAR19 is made from a patient's own T-cells. The cells are sent to our controlled laboratory, cultured, modified, and then multiplied to reach a desirable dose. This takes -19 days from Leukapheresis.",
  },
  {
    question: "How many days after the therapy would CRS be expected?",
    answer:
      "Cytokine Release Syndrome (CRS) is the most frequent after-effect of the therapy, but it is expected within the first 4 weeks of the infusion, not long term.",
  },
  {
    question: "How common are the serious side effects?",
    answer:
      "In our clinical trials, severe symptoms were seen in N50/0 of patients. These side effects may depend upon several factors, including the pre-existing disease burden and your clinical condition.",
  },
];

export const partners = [
  {
    name: "Partner 1",
    img: "/assets/sections/PartnerSection/IIT_Bombay.png",
  },
  {
    name: "Partner 2",
    img: "/assets/sections/PartnerSection/Laurus-labs.png",
  },
  {
    name: "Partner 3",
    img: "/assets/sections/PartnerSection/Sine_Labs.png",
  },
  {
    name: "Partner 4",
    img: "/assets/sections/PartnerSection/TMH.png",
  },
];
