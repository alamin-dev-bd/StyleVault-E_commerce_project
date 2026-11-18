
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import AuthLayout from "@/features/auth/components/AuthLayout";

export default function Login({ onSubmit, loading = false, error = "" }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    onSubmit?.({
      identifier: formData.get("identifier"),
      password: formData.get("password"),
    });
  };

  const inputClass =
    "w-full rounded-lg border border-(--border) bg-(--surface) px-4 py-3.5 text-sm text-(--text) placeholder:text-(--text-muted) outline-none transition focus:border-(--primary) focus:ring-2 focus:ring-(--primary-soft)";

  return (
    <AuthLayout
      footer={
        <>
          By continuing, you agree to our{" "}
          <Link to="/terms" className="text-(--link) hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="text-(--link) hover:underline">
            Privacy Policy
          </Link>.
        </>
      }
    >

      {/* Heading */}
      <div className="text-center mb-10">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-(--primary)">
          Welcome Back
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold mt-3">
          Sign in to your account
        </h1>

        <p className="mt-3 text-sm text-(--text-muted)">
          New to StyleVault?{" "}
          <Link
            to="/signup"
            className="font-semibold text-(--link) hover:underline"
          >
            Create an account
          </Link>
        </p>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Email / Phone */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Phone number or email
          </label>

          <input
            type="text"
            name="identifier"
            placeholder="Enter your phone or email"
            autoComplete="username"
            required
            className={inputClass}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              className={`${inputClass} pr-12`}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-(--text-muted) hover:text-(--primary) cursor-pointer"
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-(--link) hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Error */}
        {error && (
          <p className="text-sm text-red-500 text-center">
            {error}
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-(--accent) text-(--bg) font-bold py-3.5 transition hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Signing in..." : "Sign in"}
          {!loading && <ArrowRight size={18} />}
        </button>

      </form>

      {/* Divider */}
      <div className="flex items-center gap-4 my-7">
        <div className="flex-1 h-px bg-(--border)" />
        <span className="text-xs text-(--text-muted) uppercase tracking-wider">
          Secure Shopping
        </span>
        <div className="flex-1 h-px bg-(--border)" />
      </div>

      <p className="text-center text-xs text-(--text-muted)">
        Sign in to explore your orders, wishlist and personalized collections.
      </p>

    </AuthLayout>
  );
}
