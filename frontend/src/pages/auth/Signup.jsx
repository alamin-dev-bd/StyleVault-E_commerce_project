
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import AuthLayout from "@/features/auth/components/AuthLayout";

export default function Signup({
  onSubmit,
  loading = false,
  error = "",
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const inputClass =
    "w-full rounded-lg border border-(--border) bg-(--surface) px-4 py-3.5 text-sm text-(--text) placeholder:text-(--text-muted) outline-none transition focus:border-(--primary) focus:ring-2 focus:ring-(--primary-soft)";

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError("");

    const formData = new FormData(e.currentTarget);

    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    onSubmit?.({
      email: formData.get("email"),
      username: formData.get("username"),
      password,
      confirmPassword,
    });
  };

  return (
    <AuthLayout
      wide
      footer={
        <>
          By creating an account, you agree to our{" "}
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
      <div className="text-center mb-9">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-(--primary)">
          Join StyleVault
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold mt-3">
          Create your account
        </h1>

        <p className="mt-3 text-sm text-(--text-muted)">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-(--link) hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Two Column Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              className={inputClass}
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="Choose a username"
              autoComplete="username"
              minLength={3}
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
                placeholder="Create a password"
                autoComplete="new-password"
                minLength={8}
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                autoComplete="new-password"
                required
                className={`${inputClass} pr-12`}
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                aria-label={showConfirm ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-(--text-muted) hover:text-(--primary) cursor-pointer"
              >
                {showConfirm ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </div>

        </div>

        {/* Error Messages */}
        {(passwordError || error) && (
          <p className="text-sm text-red-500 text-center">
            {passwordError || error}
          </p>
        )}

        {/* Terms */}
        <label className="flex items-start gap-2.5 text-xs sm:text-sm text-(--text-muted) cursor-pointer">
          <input
            type="checkbox"
            required
            className="mt-0.5 accent-(--primary) cursor-pointer"
          />

          <span>
            I agree to the{" "}
            <Link to="/terms" className="text-(--link) hover:underline">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-(--link) hover:underline">
              Privacy Policy
            </Link>.
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-(--accent) text-(--bg) font-bold py-3.5 transition hover:brightness-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? "Creating account..." : "Create Account"}
          {!loading && <ArrowRight size={18} />}
        </button>

      </form>

      <div className="flex items-center gap-4 my-7">
        <div className="flex-1 h-px bg-(--border)" />
        <span className="text-xs text-(--text-muted) uppercase tracking-wider">
          StyleVault
        </span>
        <div className="flex-1 h-px bg-(--border)" />
      </div>

      <p className="text-center text-xs text-(--text-muted)">
        Discover your style. Enjoy a more personalized shopping experience.
      </p>

    </AuthLayout>
  );
}
