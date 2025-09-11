import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Sending Message..." });

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Your Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Your Public Key
      );

      console.log("EmailJS Result:", result.text);
      setStatus({ type: "success", msg: "Message sent successfully!" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ type: "error", msg: "Failed to send message. Try again." });
    } finally {
      setFormData({ name: "", email: "", message: "" });
      // setStatus({ type: "", msg: "" });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-slate-700 dark:text-white">
        Contact Us
      </h2>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-600 dark:text-slate-300"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md dark:bg-zinc-800 dark:text-white dark:border-zinc-700"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-semibold transition duration-200"
      >
        {status.type === "loading" ? status.msg : "Send Message"}
      </button>

      {status.msg && (
        <p
          className={`text-sm mt-3 ${
            status.type === "success" && "text-green-500"
          } ${status.type === "error" && "text-red-500"}
          ${status.type === "loading" && "text-orange-500"}`}
        >
          {status.msg}
        </p>
      )}
    </form>
  );
};

export default ContactUsForm;
