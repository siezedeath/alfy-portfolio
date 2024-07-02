"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";


const services = [
  {
    num: "01",
    title: "Software/Web Development",
    description: "Leveraging extensive experience in creating educational technologies, I specialize in creating AI/ML products that are designed to assist students in their learning journeys. My goal is to enhance educational accssiblity by enhancing learning experience for students via technologies by leveraging API's and public data sets.",
    href: ""
  },
  {
    num: "02",
    title: "Quantitative Research",
    description: "My quantitative research journey began with learning options trading theory at Akuna Capital and advanced significantly during my tenure at Hudson River Trading. There, I collaboratively designed sophisticated mathematical models for trading financial derivatives across multiple strategies, resulting in greater theoretical alpha.",
    href: ""
  },
  {
    num: "03",
    title: "Competitive Math and Computer Science",
    description: "My competitive math and computer science experience includes participating in prestigious competitions such as the AMC12A, AIME, and USAMO during high school. In computer science, I competed in the USACO, gaining entry-level experience. My strong foundation in problem solving has been a significant asset in my academic and professional pursuits.",
    href: ""
  },
  {
    num: "04",
    title: "Tutoring",
    description: "I have been tutoring students since my freshman year of high school, continuing to the present day. My tutoring expertise spans a wide range of subjects from Pre-algebra to Multivariable calculus. I also prepare students for standardized exams such as the SHSAT, SAT, and ACT. My approach is tailored to each student’s unique learning style, ensuring that they achieve their academic goals through clear explanations and practical problem-solving techniques.",
    href: ""
  },
]

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link 
                href={service.href}
                className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"> 
                  <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
              {/* description */}
              <p className="text-white/60">{service.description}</p>
              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services