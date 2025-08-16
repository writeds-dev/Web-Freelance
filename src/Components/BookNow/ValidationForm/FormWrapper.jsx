import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// <<< Set your one WhatsApp number here >>>
const WHATSAPP_NUMBER = "9805260347"; // e.g., "9805260347" or "8350888932"

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required."),
  lastName: Yup.string().required("Last Name is required."),
  email: Yup.string().email("Invalid email address").required("Email is required."),
  phone: Yup.string().matches(/^[0-9+\-()\s]*$/, "Phone must be a valid number").notRequired(),
  message: Yup.string().required("Message is required."),
});

// Normalize to digits with country code (WhatsApp expects country code without '+')
const normalizePhone = (num) => {
  const digits = (num || "").replace(/[^\d]/g, "");
  return digits.startsWith("91") ? digits : `91${digits}`;
};

const buildWAUrl = (phone, text) => {
  const to = normalizePhone(phone);
  const encoded = encodeURIComponent(text);
  return `https://api.whatsapp.com/send?phone=${to}&text=${encoded}`;
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
      // Include ALL fields (show "-" if empty)
      const parts = [
        `First Name: ${values.firstName || "-"}`,
        `Last Name: ${values.lastName || "-"}`,
        `Email: ${values.email || "-"}`,
        `Phone: ${values.phone || "-"}`,
        `Message: ${values.message || "-"}`,
      ];
      const rawMessage = parts.join("\n").trim();
      const url = buildWAUrl(WHATSAPP_NUMBER, rawMessage);

      try {
        // Same tab is most reliable for keeping text payload
        window.location.assign(url);
      } catch {
        // Fallback: programmatically click a hidden anchor
        if (waLinkRef.current) {
          waLinkRef.current.href = url;
          waLinkRef.current.click();
        }
      }

      resetForm();
    },
  });

  return (
    <div id="booking-form" className="bg-white p-8 rounded shadow flex flex-col justify-between">
      <h3 className="text-2xl font-bold text-black mb-6">
        KEEP IN <span className="text-red-800">TOUCH</span>
      </h3>

      {/* Hidden fallback link */}
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

        {/* Phone */}
        <div>
          <input
            className="w-full bg-transparent border-b-2 border-gray-300 placeholder-gray-500 focus:outline-none py-2 mb-2 text-black"
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
