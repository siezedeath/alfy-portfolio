"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title:"About Me",
  description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In alias velit commodi veritatis expedita nam. Suscipit sunt in corporis cum provident. Eaque sint error perspiciatis dolorem vero laboriosam facilis debitis.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Alfayed Alam"
    },
    {
      fieldName: "Phone",
      fieldValue: "(347) 849 4116"
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years"
    },
    {
      fieldName: "Discord",
      fieldValue: "siezdeath"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi"
    },
    {
      fieldName: "E-mail",
      fieldValue: "fayedfardil2@gmail.com"
    },
    {
      fieldName: "Quantitative Researcher",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Bengali"
    },
  ]

}

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  decripton:
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias velit commodi veritatis expedita nam. Suscipit sunt in corporis cum provident. Eaque sint error perspiciatis dolorem vero laboriosam facilis debitis.",
  items: [
    {
      company: "Synergy Prep Inc.",
      position: "Software Developer and Tutor",
      duration: "May 2023 - Present"
    },
    {
      company: "Hudson River Trading",
      position: "Algorithm Developer Intern",
      duration: "Summer 2023"
    },
    {
      company: "Akuna Capital",
      position: "Quantitative Trading - Options",
      duration: "Summer 2022"
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  decripton:
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias velit commodi veritatis expedita nam. Suscipit sunt in corporis cum provident. Eaque sint error perspiciatis dolorem vero laboriosam facilis debitis.",
  items: [
    {
      institution: "Stony Brook University",
      degree: "B.S. in Applied Mathematics and Statistics",
      duration: "August 2021 - May 2025"
    },
    {
      institution: "Stuyvesant High School",
      degree: "Applied Mathematics and Statistics",
      duration: "August 2021 - May 2025"
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias velit commodi veritatis expedita nam. Suscipit sunt in corporis cum provident. Eaque sint error perspiciatis dolorem vero laboriosam facilis debitis.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "cssl 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ 
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}

      className="min-h-[80vh] flex items-center justify-cente py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <Tabs 
        defaultValue="experience" 
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experince">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/** TabsContent */}
          <div className="min-h-[70vh] w-full">
            {/** Experience */}
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume