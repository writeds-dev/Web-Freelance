import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required."),
  lastName: Yup.string().required("Last Name is required."),
  email: Yup.string().email("Invalid email address").required("Email is required."),
  phone: Yup.string()
    .matches(/^[0-9+\-()\s]*$/, "Phone must be a valid number")
    .notRequired(),
  message: Yup.string().required("Message is required."),
});

const ContactForm = () => {
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
      // Handle form submission (e.g., send to backend)
      alert("Message sent!\n\n" + JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <div id="booking-form" className="bg-white p-8 rounded shadow flex flex-col justify-between">
      <h3 className="text-2xl font-bold text-black mb-6">KEEP IN <span className="text-red-800">TOUCH</span>
      </h3>
      <form className="space-y-5" onSubmit={formik.handleSubmit}>
        {/* First Name */}
        <div>
          <input
            className="w-full bg-transparent border-b-2 border-white placeholder-black placeholder-opacity-80 focus:outline-none py-2 mb-2 text-white"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
          ) : null}
        </div>

        {/* Last Name */}
        <div>
          <input
            className="w-full bg-transparent border-b-2 border-white placeholder-black placeholder-opacity-80 focus:outline-none py-2 mb-2 text-white"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
          ) : null}
        </div>

        {/* Email */}
        <div>
          <input
            className="w-full bg-transparent border-b-2 border-white placeholder-black placeholder-opacity-80 focus:outline-none py-2 mb-2 text-white"
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Phone */}
        <div>
          <input
            className="w-full bg-transparent border-b-2 border-white placeholder-black placeholder-opacity-80 focus:outline-none py-2 mb-2 text-white"
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          ) : null}
        </div>

        {/* Message */}
        <div>
          <textarea
            className="w-full bg-transparent border-b-2 border-black placeholder-white placeholder-opacity-80 focus:outline-none py-2 mb-2 text-black resize-none"
            name="message"
            placeholder="Enter a message"
            rows={2}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          ) : null}
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className=" text-white bg-blue-500 font-semibold px-6 py-2 mt-4 rounded shadow hover:bg-blue-600 transition"
            disabled={formik.isSubmitting}
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
