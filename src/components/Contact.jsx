import React, { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${
      CONTACT.email
    }?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `From: ${formData.email}\n\n${formData.message}`
    )}`;
  };

  return (
    <div className=" h-[90vh] border-neutral-900 pb-20">
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

      <motion.form
        onSubmit={handleSubmit}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.0 }}
        className="max-w-lg mx-auto bg-neutral-800 p-6 rounded-2xl shadow-lg mt-10"
      >
        <h2 className="text-xl text-center mb-4">Send me a message</h2>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 rounded bg-neutral-700 text-white border border-neutral-600 focus:outline-none"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 rounded bg-neutral-700 text-white border border-neutral-600 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 rounded bg-neutral-700 text-white border border-neutral-600 resize-none focus:outline-none"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
