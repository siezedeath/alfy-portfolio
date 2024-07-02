"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 347 849 4116",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "fayedfardil2@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bronx, New York 10461",
  },
];

import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/** Contact Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Dolore asperiores 
                consequatur iure rem necessitatibus vel? 
                Laudantium eveniet, delectus voluptate quisquam 
                ullam similique non illum possimus itaque sapiente 
                sint amet placeat?
              </p>
              {/** input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
                <Input type="firstname" placeholder="First Name" />
                <Input type="lasttname" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/** select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="est">Software Development</SelectItem>
                    <SelectItem value="cst">Quantitative Researcher</SelectItem>
                    <SelectItem value="mst">Tutor</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/** textarea */}
              <Textarea 
              className="h-[200px]"
              placeholder="Type your message here." />
              {/** button */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/** Contact Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 
          xl:order-none mb-8 xl:mb-0">
            <ul>
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] xl:h-[72px]
                    bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};  

export default Contact;
