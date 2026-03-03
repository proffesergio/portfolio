import {
  RiInstagramLine,
  RiFacebookLine,
  RiYoutubeLine,
  RiGithubLine,
} from "@remixicon/react";

export const heroIcons = [
  <RiInstagramLine key="1" />,
  <RiFacebookLine key="2" />,
  <RiYoutubeLine key="4" />,
  <RiGithubLine key="5" />,
];

// About icons
import { RiGithubFill } from "@remixicon/react";
import { RiProjector2Line } from "@remixicon/react";
import { RiGroupLine } from "@remixicon/react";
import { RiAwardFill } from "@remixicon/react";

export const aboutData = [
  {
    title: "Github Repos",
    amount: 348,
    icon: <RiGithubFill />,
  },
  {
    title: "Successful Projects",
    amount: 227,
    icon: <RiProjector2Line />,
  },
  {
    title: "Happy Clients",
    amount: 176,
    icon: <RiGroupLine />,
  },
  {
    title: "Awards and Recognitions",
    amount: 107,
    icon: <RiAwardFill />,
  },
];

export const aboutText = `I'm Hossain Md. Billal, a professional web developer specializing in creating stunning and effective websites to help grow your business. With a strong background in front-end and back-end development, I bring a comprehensive skill set to every project I undertake.

My expertise includes HTML, CSS, JavaScript, Python, PHP, and MySQL, among other technologies. I have experience working with popular frameworks like Django and Laravel, as well as front-end libraries like Bootstrap and popular frameworks like React and Next.js. I am passionate about crafting user-friendly interfaces and ensuring seamless functionality across all devices.

I believe in the power of collaboration and work closely with my clients to understand their unique needs and goals. Whether you're looking to build a brand-new website or enhance an existing one, I'm here to help you achieve your vision.  Let's work together to create a digital presence that truly represents your brand and drives success.`;
// End of About Me

// Skills
export const skillsData = [
  {
    name: "Python",
    level: 60,
    icon: "/skills/py.webp",
  },
  {
    name: "HTML5",
    level: 90,
    icon: "/skills/html5.png",
  },
  {
    name: "CSS3",
    level: 85,
    icon: "/skills/css3.png",
  },
  {
    name: "JavaScript",
    level: 80,
    icon: "/skills/javascript.png",
  },
  {
    name: "React JS",
    level: 75,
    icon: "/skills/react.png",
  },
  {
    name: "Node JS",
    level: 65,
    icon: "/skills/nodejs.png",
  },
  {
    name: "Next JS",
    level: 90,
    icon: "/skills/next.png",
  },
  {
    name: "PHP",
    level: 80,
    icon: "/skills/php.png",
  },
  {
    name: "MongoDB",
    level: 60,
    icon: "/skills/mongodb.png",
  },
  {
    name: "Github",
    level: 85,
    icon: "/skills/github.png",
  },
  {
    name: "VS Code",
    level: 90,
    icon: "/skills/vscode.png",
  },
  {
    name: "Framer Motion",
    level: 90,
    icon: "/skills/framermotion.png",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    icon: "/skills/tailwind.png",
  },
  {
    name: "TypeScript",
    level: 90,
    icon: "/skills/typescript.png",
  },
  {
    name: "Figma",
    level: 90,
    icon: "/skills/figma.png",
  },
  {
    name: "Photoshop",
    level: 95,
    icon: "/skills/photoshop.png",
  },
  {
    name: "Illustrator",
    level: 90,
    icon: "/skills/illustrator.png",
  },
  {
    name: "Premiere Pro",
    level: 90,
    icon: "/skills/premierepro.png",
  },
  {
    name: "After Effects",
    level: 90,
    icon: "/skills/ae.png",
  },
  {
    name: "MS Office",
    level: 90,
    icon: "/skills/msoffice.png",
  },
  {
    name: "Wordpress",
    level: 80,
    icon: "/skills/wordpress.png",
  },
];

import { RiDownloadLine } from "@remixicon/react";
import { RiArrowLeftSFill } from "@remixicon/react";

export const arrowLeftIcon = <RiArrowLeftSFill />;
export const downloadIcon = <RiDownloadLine />;

import { RiCheckLine } from "@remixicon/react";

export const checkIcon = <RiCheckLine />;
// End of Skills

// Experience
import { RiComputerLine } from "@remixicon/react";

export const experienceIcon = <RiComputerLine />;

export const educationData = [
  {
    title: "Primary School Certificate (PSC)",
    institution: "Paikarchar Government Primary School",
    passing_year: 2008,
    result: "5.00 out of 5.00",
    group: "General Scholarship",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Dulalpur Chandramoni High School",
    passing_year: 2013,
    result: "5.00 out of 5.00 (GPA)",
    group: "Science",
  },
  {
    title: "Higher Secondary School Certificate (HSC)",
    institution: "Gulshan Model School and College",
    passing_year: 2015,
    result: "4.17 out of 5.00 (GPA)",
    group: "Science",
  },
  {
    title: "Computer Science and Engineering (BSc in CSE)",
    institution: "Southeast University",
    passing_year: 2020,
    result: "3.00 out of 4.00 (GPA)",
    group: "Bachelor of Science",
  },
];

export const experienceData = [
  {
    title: "Internship",
    duration: "2019 - 2020",
    workplace: "Geeksntechnology Ltd.",
    experience: ["Foundation and Basics", "PHP/Laravel Web Developer"],
  },
  {
    title: "Junior Web Developer",
    duration: "2020 - 2021",
    workplace: "Universal Computer BD",
    experience: [
      "Graphic Designer",
      "E-Commerce Web Development using OpenCart CMS",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    duration: "2021 - 2022",
    workplace: "PotakaIT Ltd.",
    experience: ["E-Commerce Website Development", "Graphic Designing"],
  },
  {
    title: "Freelancing Career",
    duration: "2019 - 2022",
    workplace: "Fiverr, People Per Hour",
    experience: [
      "Professional Graphic Design Services",
      "Wordpress Website Development Services",
    ],
  },
  {
    title: "Publication Assistant (UDA)",
    duration: "2022 - Current",
    workplace: "Bangladesh Institute of Development Studies (BIDS)",
    experience: [
      "Research Paper Formatting and Editing",
      "Book Layout and Design",
      "Assisting in Publication Processes",
      "Collaborating with Authors and Editors",
      "Managing Publication Timelines",
      "Ensuring Quality Control",
      "Utilizing Design Software",
      "Coordinating with Printing Services",
      "Maintaining Publication DOI Records",
    ],
  },
  {
    title: "Self Learning and Growth",
    duration: "2020 - 2026",
    workplace: "Tutorial and Online Courses",
    experience: [
      "Advanced JavaScript Concepts",
      "React and Next.js Frameworks",
      "Backend Development with Node.js",
      "Database Management with MongoDB",
      "Version Control with Git and GitHub",
      "Deployment and Hosting Solutions",
      "Continuous Integration and Continuous Deployment (CI/CD)",
      "Performance Optimization Techniques",
      "Security Best Practices in Web Development",
      "Python Programming and Django Framework",
    ],
  },
];
// End of Experience

// Toggle
import { RiMoonFoggyFill } from "@remixicon/react";
import { RiSunFoggyFill } from "@remixicon/react";

export const sunIcon = <RiSunFoggyFill />;
export const moonIcon = <RiMoonFoggyFill />;
// End of Toggle

// Reviews
import { RiStarHalfLine } from "@remixicon/react";
import { RiStarFill } from "@remixicon/react";
import { RiStarLine } from "@remixicon/react";
import { RiArrowLeftSLine } from "@remixicon/react";
import { RiArrowRightSLine } from "@remixicon/react";

export const arrowLeftLightIcon = <RiArrowLeftSLine />;
export const arrowRightLightIcon = <RiArrowRightSLine />;
export const starEmptyIcon = <RiStarLine />;
export const starHalfIcon = <RiStarHalfLine />;
export const starFullIcon = <RiStarFill />;

export const reviewsData = [
  {
    image: "/reviews/client1.png",
    name: "Mark Twain",
    review:
      "Your work exceeded my expectations! The graphic design you created for my project was outstanding and truly captured the essence of my brand. It truly represents me and my company. I highly recommend your services to anyone looking for top-notch graphic design work.",
    rating: 4.5,
    stars: [1, 1, 1, 1, 0.5],
  },
  {
    image: "/reviews/client2.png",
    name: "Sarah Johnson",
    review:
      "Working with you was an absolute pleasure! Your attention to detail and creativity brought my vision to life in a way I never thought possible. The final design was not only visually stunning but also effectively communicated my message. I am beyond satisfied with the results and will definitely be returning for future projects. Thank you for your exceptional work!",
    rating: 4,
    stars: [1, 1, 1, 1, 0],
  },
  {
    image: "/reviews/client3.png",
    name: "Bill Murray",
    review:
      "The website you developed for my business has been a game-changer! Not only is it visually appealing, but it also functions seamlessly across all devices. Since launching the new site, I've seen a significant increase in traffic and customer engagement. Your expertise and professionalism throughout the entire process were truly impressive. I can't thank you enough for helping me take my online presence to the next level!",
    rating: 5,
    stars: [1, 1, 1, 1, 1],
  },
  {
    image: "/reviews/client4.png",
    name: "Johnson Smith",
    review:
      "The Illustrations you created for my book were absolutely breathtaking! Your ability to bring characters and scenes to life through your artwork is truly remarkable. Each illustration perfectly captured the mood and tone of the story, enhancing the overall reading experience. I've received countless compliments on the illustrations, and I couldn't be happier with the final result. Thank you for your incredible talent and dedication to your craft!",
    rating: 3.5,
    stars: [1, 1, 1, 0.5, 0],
  },
  {
    image: "/reviews/client5.png",
    name: "Christina Lee",
    review:
      "My Car Rental Website looks fantastic thanks to your expert development skills! The user-friendly interface and sleek design have made it easy for customers to navigate and book their rentals. Since the launch of the new website, I've noticed a significant increase in bookings and customer satisfaction. Your professionalism and attention to detail throughout the project were truly commendable. I highly recommend your services to anyone in need of a top-notch web developer! Thank you for your outstanding work!",
    rating: 4,
    stars: [1, 1, 1, 1, 0],
  },
];
