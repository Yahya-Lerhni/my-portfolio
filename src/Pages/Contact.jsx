import React, { useState } from "react";
import { motion } from "framer-motion";
motion
import emailjs from "@emailjs/browser";
import Menubar from "../Components/Menubar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    const serviceId = "service_gzdanbt";
    const templateId = "template_pwkdcog";
    const publicKey = "YuSyFpf8T3WYGsA2Z";

    const templateParams = {
      form_name: name,
      form_email: email,
      to_name: "Sara Chafik Idrissi",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error Sending Email", error);
      });
  };

  return (
    <div className=""> 
      <Menubar />
      <div className="flex flex-col lg:flex-row justify-center items-center px-6 min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white gap-10">
        {/* Left Side */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex flex-col items-start"
        >
          <motion.h1
            style={{ fontFamily: "homefont" }}
            className="text-[5rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Hello.
          </motion.h1>

          <motion.p
            style={{ fontFamily: "sitefont" }}
            className="max-w-[90%] md:max-w-[70%]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Need a beautiful, well-structured website that you can own and
            maintain yourself? Get in touch.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-6 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {[
              {
                href: "https://www.linkedin.com/in/yahya-lerhni-707110372/",
                text: "LinkedIn",
                color: "hover:text-blue-300",
              },
              {
                href: "https://dribbble.com/yahya-lerhni",
                text: "Dribbble",
                color: "hover:text-pink-300",
              },
              {
                href: "https://x.com/YLerhni",
                text: "Twitter",
                color: "hover:text-blue-400",
              },
              {
                href: "https://github.com/Yahya-Lerhni",
                text: "Github",
                color: "hover:text-gray-300",
              },
            ].map((link, i) => (
              <motion.a
                key={link.text}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`underline ${link.color}`}
                style={{ fontFamily: "homefont" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + i * 0.2 }}
              >
                {link.text}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col items-center"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.h1
            style={{ fontFamily: "homefont" }}
            className="text-[2.5rem] sm:text-[3rem] text-white drop-shadow-md"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Contact Me
          </motion.h1>

          <motion.div
            className="w-full max-w-[500px] p-5 flex flex-col items-center gap-5 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl shadow-yellow-300/30"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="w-full flex flex-col sm:flex-row justify-between items-center gap-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <input
                className="w-full sm:w-[50%] h-[2rem] rounded-xl px-3 shadow-md shadow-yellow-200/40 bg-white/20 text-white placeholder-white/70"
                style={{ fontFamily: "sitefont" }}
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full sm:w-[50%] h-[2rem] rounded-xl px-3 shadow-md shadow-yellow-200/40 bg-white/20 text-white placeholder-white/70"
                style={{ fontFamily: "sitefont" }}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>

            <motion.textarea
              className="w-full h-[120px] rounded-xl p-3 shadow-md shadow-yellow-200/40 bg-white/20 text-white placeholder-white/70 resize-none"
              placeholder="Message"
              style={{ fontFamily: "sitefont" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            />

            <motion.button
              style={{ fontFamily: "homefont" }}
              className="w-full sm:w-40 h-10 rounded-xl cursor-pointer bg-[gold] hover:bg-yellow-400 hover:scale-110 transition text-black shadow-lg shadow-yellow-400/40"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              onClick={sendEmail}
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
