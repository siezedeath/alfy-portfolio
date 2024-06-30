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
          {/* form */}
          <div className="xl-h[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#2727c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas obcaecati minus minima optio reprehenderit. Aspernatur labore, rerum consectetur expedita corrupti impedit nisi, aut vel vitae magni, aliquid pariatur voluptatum incidunt.</p>
              {/** input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder=" First Name" />
                <Input type="lastname" placeholder=" Last Name" />
                <Input type="email" placeholder=" Email Address" />
                <Input type="phone" placeholder=" Phone Number" />
              </div>
              {/** select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est"> Fullstack Software Development </SelectItem>
                    <SelectItem value="cst"> Quantitative Research </SelectItem>
                    <SelectItem value="mst"> Tutor </SelectItem>
                    </SelectGroup>
                </SelectContent>
              </Select>
              {/** textarea */}
              <Textarea 
              className="h-[200px]" 
              placeholder="Type your message here."
              />
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.section>
  );
};  

export default Contact;
