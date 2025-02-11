import React, { useRef } from "react";
import { sendForm } from "@emailjs/browser";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm(
      "service_ra13fb9",
      "template_9tcco7d",
      form.current,
      "BcqI3hALaR7qyl1Ow"
    ).then(
      () => {
        console.log("SUCCESS!");
        alert("Subscribed");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <div className="border border-black w-[87%] m-auto my-8 bg-[url('bg.png')] h-auto lg:h-[450px] bg-center bg-cover rounded-4xl flex flex-col lg:flex-row justify-center lg:justify-around items-center py-10 px-6 lg:px-10 gap-8">
      {/* Left Content - Always Visible */}
      <div className="flex flex-col gap-5 max-w-lg text-center lg:text-left">
        <p className="text-[36px] sm:text-[40px] md:text-[45px] lg:text-[50px] font-semibold leading-[1.2] text-white">
          Don't Miss Out on Grocery Deals
        </p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-3 border border-white bg-transparent text-white rounded-md placeholder-gray-300 focus:outline-none focus:border-yellow-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-3 border border-white bg-transparent text-white rounded-md placeholder-gray-300 focus:outline-none focus:border-yellow-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-3 border border-white bg-transparent text-white rounded-md placeholder-gray-300 focus:outline-none focus:border-yellow-400 resize-none"
            rows="3"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition"
          >
            Subscribe Now
          </button>
        </form>
      </div>

      {/* Right Image - Hidden on Mobile & Tablet, Visible on Desktop */}
      <img
        src="email.png"
        alt="Newsletter"
        className="w-[350px] md:w-[400px] lg:w-[450px] h-auto hidden lg:block"
      />
    </div>
  );
};

export default Email;
