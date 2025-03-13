import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b h-[75vh] border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.0 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.0 }}
        className="text-center tracking-tighter"
      >
        <span
          onClick={() => (window.location.href = `mailto:${CONTACT.email}`)}
          className="border-b cursor-pointer"
        >
          {CONTACT.email}
        </span>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <p className="my-4">{CONTACT.address}</p>
      </motion.div>
    </div>
  );
};

export default Contact;
