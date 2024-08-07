"use client";

import { FaHtml5, FaCss3, FaJs, FaPython, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiCplusplus } from "react-icons/si";

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
      fieldValue: "(+1) 347 849 4116"
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years"
    },
    {
      fieldName: "Discord & Github",
      fieldValue: "siezedeath"
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
  descripton:
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
      duration: "Spring 2023"
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  descripton:
  "I went to Stuyvesant High School and now I'm studying at Stony Brook University. I'm majoring in Applied Mathematics & Statistics. Stuyvesant was probably the biggest factor that motivated me to fall in love with math and I'm grateful for all the problem solving tools I've picked up along the way, and I've surprised myself at how applicable some of these skills are over a broad range of subjects.",
  items: [
    {
      institution: "Stony Brook University",
      degree: "Applied Mathematics & Statistics",
      duration: "August 2021 - May 2025"
    },
    {
      institution: "Stuyvesant High School",
      degree: "Competitive Math & Computer Science",
      duration: "September 2017 - June 2021"
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description: "These are some of the skills that I've picked up over my time coding. My main focus is on observing and analyzing data, as well as playing around with AI models as well finetuning them for my own use case.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
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

      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <Tabs 
        defaultValue="experience" 
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/** Content */}
          <div className="min-h-[70vh] w-full">
            {/** Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.descripton}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/** Education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.descripton}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/** skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>


            {/** about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                      );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume