import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

/**
 * <<< SET YOUR WHATSAPP NUMBER HERE >>>
 * Digits only, include country code, NO "+" or spaces.
 * India example: "919805260347" (for +91 9805260347)
 */
const WHATSAPP_NUMBER = "919805260347";

// ---------------- Validation ----------------
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required."),
  lastName: Yup.string().required("Last Name is required."),
  email: Yup.string().email("Invalid email address").required("Email is required."),
  phone: Yup.string()
    .matches(/^[0-9+\-()\s]*$/, "Phone must be a valid number")
    .notRequired(),
  message: Yup.string().required("Message is required."),
});

// ---------------- Helpers ----------------
// only digits
const digitsOnly = (str = "") => str.replace(/[^\d]/g, "");

// WhatsApp wants E.164 digits without '+'
const normalizeWaNumber = (num) => digitsOnly(num);

// encode text for WhatsApp. Some clients prefer + for spaces.
// Newlines will be %0A automatically from encodeURIComponent.
const encodeMessage = (text) => encodeURIComponent(text).replace(/%20/g, "+");

// detect platform to pick best endpoint
const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const isDesktop = () => !isMobile();

// Build the most compatible URL for the environment
const buildWAUrl = (phone, text) => {
  const to = normalizeWaNumber(phone);
  const msg = encodeMessage(text);

  // 1) Mobile devices → try native app deep link
  if (isMobile()) {
    // App deeplink (works best on iOS/Android when triggered by a user gesture)
    return `whatsapp://send?phone=${to}&text=${msg}`;
  }

  // 2) Desktop → WhatsApp Web
  return `https://web.whatsapp.com/send?phone=${to}&text=${msg}&app_absent=0`;
};

// Some browsers/extensions block custom schemes; keep a web fallback handy
const buildWebFallbackUrl = (phone, text) => {
  const to = normalizeWaNumber(phone);
  const msg = encodeMessage(text);
  return `https://api.whatsapp.com/send?phone=${to}&text=${msg}`;
};

export default function ContactForm() {
  const waLinkRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      // Compose the message (keep labels to make it readable in WA)
      const parts = [
        `First Name: ${values.firstName || "-"}`,
        `Last Name: ${values.lastName || "-"}`,
        `Email: ${values.email || "-"}`,
        `Phone: ${values.phone || "-"}`,
        "",
        values.message || "-",
      ];

      // WhatsApp accepts messages up to ~4096 chars; trim if needed
      const rawMessage = parts.join("\n").trim().slice(0, 4096);

      // Pick best URL for the device, with a fallback link ready
      const primaryUrl = buildWAUrl(WHATSAPP_NUMBER, rawMessage);
      const fallbackUrl = buildWebFallbackUrl(WHATSAPP_NUMBER, rawMessage);

      try {
        // Use same-tab navigation – most reliable for preserving the query string
        window.location.assign(primaryUrl);
      } catch {
        // If custom scheme fails (or errors), fall back to https web endpoint
        const url = fallbackUrl;
        if (waLinkRef.current) {
          waLinkRef.current.href = url;
          waLinkRef.current.click();
        } else {
          window.location.assign(url);
        }
      }

      // optional: do NOT reset immediately if you want the user to come back to a filled form.
      resetForm();
    },
  });

  return (
    <div id="booking-form" className="bg-white p-8 rounded shadow flex flex-col justify-between">
      <h3 className="text-2xl font-bold text-black mb-6">
        KEEP IN <span className="text-red-800">TOUCH</span>
      </h3>

      {/* Hidden fallback link (same-tab) */}
      <a ref={waLinkRef} href="/" target="_self" rel="noreferrer" className="hidden" />

      <form className="space-y-5" onSubmit={formik.handleSubmit}>
        {/* First Name */}
        <div>
          <input
            className="w-full bg-transparent border-b-2 border-gray-300 placeholder-gray-500 focus:outline-none py-2 mb-2 text-black"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
          )}
        </div>

        {/* Last Name */}
        <div>
          <input
            className="w-full bg-transparent border-b-2 border-gray-300 placeholder-gray-500 focus:outline-none py-2 mb-2 text-black"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            className="w-full bg-transparent border-b-2 border-gray-300 placeholder-gray-500 focus:outline-none py-2 mb-2 text-black"
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="email"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>

        {/* Phone (user's phone, not required) */}
        <div>
          <input
            className="w-full bg-transparent border-b-2 border-gray-300 placeholder-gray-500 focus:outline-none py-2 mb-2 text-black"
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="tel"
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            className="w-full bg-transparent border-b-2 border-gray-700 placeholder-gray-500 focus:outline-none py-2 mb-2 text-black resize-none"
            name="message"
            placeholder="Enter a message"
            rows={3}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          )}
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="text-white bg-blue-500 font-semibold px-6 py-2 mt-4 rounded shadow hover:bg-blue-600 transition"
            disabled={formik.isSubmitting}
          >
            SEND MESSAGE VIA WHATSAPP
          </button>
        </div>
      </form>
    </div>
  );
}
