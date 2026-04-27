"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Form = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = (e) => {
  e.preventDefault();

  let newErrors = {};

  if (!formData.name) {
    newErrors.name = "Full name is required";
  }

  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!formData.email.includes("@")) {
    newErrors.email = "Enter a valid email";
  }

  if (!formData.course) {
    newErrors.course = "Please select a course";
  }

  if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (formData.password.length < 6) {
    newErrors.password = "Minimum 6 characters";
  }

  if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  // if errors exist
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    setSuccess("");
    return;
  }

  // success
  setErrors({});
  setSuccess("Registration successful");
  router.push(
    `/dashboard?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(
      formData.email
    )}&course=${encodeURIComponent(formData.course)}`
  );

  setFormData({
    name: "",
    email: "",
    course: "",
    password: "",
    confirmPassword: "",
  });
};

    return (
    <div className="w-full max-w-xl rounded-[28px] border border-white/60 bg-white/95 p-6 sm:p-8 shadow-[0_35px_60px_-15px_rgba(15,23,42,0.25)] backdrop-blur-xl mx-auto">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">Student registration</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-900">Join a course today</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Register now to reserve your spot and start learning with our expert instructors.
        </p>
      </div>

      {success && (
        <p className="mb-4 text-green-600 font-medium text-center">
          {success}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        <label className="block text-sm font-medium text-slate-700">
          Full Name
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Email address
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
          />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Select course
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="mt-2 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
          >
            <option value="">Choose a course</option>
            <option>Web Development</option>
            <option>Data Science</option>
            <option>UI/UX</option>
            <option>Cloud Computing</option>
          </select>
          {errors.course && <p className="mt-1 text-xs text-red-600">{errors.course}</p>}
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            Password
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create password"
                minLength={6}
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-20 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-500 hover:text-slate-900"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password}</p>}
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Confirm password
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repeat password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100"
            />
            {errors.confirmPassword && <p className="mt-1 text-xs text-red-600">{errors.confirmPassword}</p>}
          </label>
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-1 hover:scale-[1.01] hover:shadow-sky-500/30"
        >
          Submit registration
        </button>
      </form>
    </div>
  );
};

export default Form;
 
