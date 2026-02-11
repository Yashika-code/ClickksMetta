import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const inputClasses =
  "mt-2 h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#7435ff]"

export function SignupPage() {
  return (
    <section className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 pb-16 pt-6 text-white sm:px-6 lg:pb-24 lg:pt-10">
      <header className="space-y-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a5b4fc]">
          Start today
        </p>
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">Create your account</h1>
        <p className="text-base text-white/60 md:text-lg">
          Start tracking, optimizing and scaling your campaigns
        </p>
      </header>

      <form className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/25 backdrop-blur-lg sm:p-8">
        <section className="space-y-5">
          <div>
            <p className="text-lg font-semibold text-white">Personal Details</p>
            <p className="text-sm text-white/50">Tell us about yourself so we can personalize your workspace.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-medium text-white/70">
              Full Name
              <input placeholder="Alex Carter" className={inputClasses} />
            </label>
            <label className="text-sm font-medium text-white/70">
              Email Address
              <input type="email" placeholder="alex@company.com" className={inputClasses} />
            </label>
            <label className="text-sm font-medium text-white/70">
              Mobile Number
              <input type="tel" placeholder="+1 (555) 123-4567" className={inputClasses} />
            </label>
            <label className="text-sm font-medium text-white/70">
              Company Name
              <input placeholder="Northwind Media" className={inputClasses} />
            </label>
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <p className="text-lg font-semibold text-white">Business Details</p>
            <p className="text-sm text-white/50">Let us know where to send performance insights.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-medium text-white/70">
              Website / Domain
              <input type="url" placeholder="https://clicksmeta.com" className={inputClasses} />
            </label>
            <label className="text-sm font-medium text-white/70">
              Skype ID (optional)
              <input placeholder="@alexgrowth" className={inputClasses} />
            </label>
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <p className="text-lg font-semibold text-white">Security</p>
            <p className="text-sm text-white/50">Set a strong password to keep your workspace protected.</p>
          </div>
          <label className="text-sm font-medium text-white/70">
            Password
            <input type="password" placeholder="••••••••" className={inputClasses} />
          </label>
        </section>

        <Button
          type="submit"
          className="h-14 w-full rounded-2xl bg-[#7435ff] text-base font-semibold text-white shadow-lg shadow-[#7435ff]/40 transition hover:bg-[#6520ff]"
        >
          Create Account
        </Button>

        <p className="text-center text-sm text-white/70">
          Already a user?{" "}
          <Link to="/login" className="font-medium text-[#c4b5fd] hover:text-white">
            Log in
          </Link>
        </p>
      </form>
    </section>
  )
}
