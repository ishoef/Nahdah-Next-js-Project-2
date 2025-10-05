"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log("Registration Data:", data);
      alert("Registered successfully!");
      reset();
    } catch (err) {
      console.error(err);
      alert("Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
          Register
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Name<span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Age & Gender Row */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Age */}
            <div className="flex-1">
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                Age<span className="text-red-400">*</span>
              </label>
              <select
                {...register("age", {
                  required: "Please select your age",
                })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
              >
                <option value="">Select your age</option>
                {Array.from({ length: 51 }, (_, i) => 10 + i).map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
              {errors.age && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.age.message}
                </p>
              )}
            </div>

            {/* Gender */}
            <div className="flex-1">
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
                Gender<span className="text-red-400">*</span>
              </label>
              <select
                {...register("gender", {
                  required: "Please select your gender",
                  validate: (value) =>
                    value !== "" || "Please select your gender",
                })}
                defaultValue=""
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
              >
                <option value="" disabled>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.gender.message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Email<span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Password<span className="text-red-400">*</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-300"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-blue-500 dark:text-blue-400 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
