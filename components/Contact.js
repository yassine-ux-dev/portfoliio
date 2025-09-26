import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { sendContactForm } from "../lib/app";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initValues = { name: "", email: "", message: "" };
const initState = { values: initValues, isLoading: false, error: "" };

const Contact = () => {
  const [state, setState] = useState(initState);
  const { values, isLoading, error } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(values);
      setState(initState);
      toast.success("Message sent successfully", {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
      toast.error("Failed to send message. Please try again.", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <div
      id="Contact"
      className="xl:ml-[300px] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden mb-10"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Get in touch
        </p>
        {error && (
          <p color="red.300" my={4} fontSize="xl">
            {error}
          </p>
        )}
        <h3 className="Contact font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ">
          Let&apos;s make something awesome together!
        </h3>
        <form className="mt-12 flex flex-col gap-8" onSubmit={onSubmit}>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Your Name?"
              className="bg-white/10 backdrop-blur-md border border-gray-400 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
            />{" "}
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email Address?"
              className="bg-white/10 backdrop-blur-md border border-gray-400 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-white/10 backdrop-blur-md border border-gray-400 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-[#d3e8d7] hover:bg-[#8f9e92] text-black rounded-2xl transition-colors w-[200px] h-[50px] flex items-center justify-center"
            aria-label="Send message"
            disabled={
              isLoading || !values.name || !values.email || !values.message
            }
          >
            <span className="flex items-center">
              {isLoading ? "Sending..." : "Send!"}

              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <div className="mt-[100px]"></div>
        </form>
      </motion.div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
