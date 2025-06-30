import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          style: {
            backgroundColor: "#e6ffed",
            color: "#065f46",
            fontWeight: "bold",
          },
        });
        form.current.reset();
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong. Please try again later.", {
          position: "bottom-right",
          style: {
            backgroundColor: "#ffe5e5",
            color: "#b91c1c",
            fontWeight: "bold",
          },
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2833] to-[#0B0C10] flex items-center justify-center px-4 py-10">
      <div className="backdrop-blur-md bg-[#1F2833]/60 border border-cyan-400/20 rounded-2xl shadow-xl p-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          Get in Touch with <span className="text-white">Ecom</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info Section */}
          <div className="text-white space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-cyan-300">
                Contact Info
              </h3>

              <p className="text-gray-300">
                Have a question or need support? We're here to help you with
                your electronics journey.
              </p>
            </div>

            <div>
              <p>
                <strong>📍 Address:</strong> Hyderabad, Telangana, India
              </p>

              <p>
                <strong>📧 Email:</strong> support@Ecom.com
              </p>

              <p>
                <strong>📞 Phone:</strong> +91 8985046331
              </p>
            </div>
          </div>
          {/* Form Section */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-white mb-1">Your Name</label>

              <input
                type="text"
                name="user_name"
                required
                placeholder="name"
                className="w-full px-4 py-2 bg-[#0B0C10] border border-cyan-500 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-white mb-1">Email Address</label>

              <input
                type="email"
                name="user_email"
                required
                placeholder="xxxx@example.com"
                className="w-full px-4 py-2 bg-[#0B0C10] border border-cyan-500 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-white mb-1">Your Message</label>

              <textarea
                rows="4"
                name="message"
                required
                placeholder="Type your message..."
                className="w-full px-4 py-2 bg-[#0B0C10] border border-cyan-500 text-white rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-semibold py-2 rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
