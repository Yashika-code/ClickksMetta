import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const inputClasses =
  "mt-2 h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#7435ff]"

export function LoginPage() {
  return (
    <section className="mx-auto flex w-full max-w-md flex-col gap-6 px-4 pb-16 pt-12 text-white sm:px-6 lg:pb-24">
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white">Welcome back</h1>
        <p className="text-base text-white/60">Log in to continue to ClicksMeta</p>
      </div>

      <form className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/25 backdrop-blur-lg sm:p-8">
        <label className="text-sm font-medium text-white/70">
          Email address
          <input type="email" placeholder="you@email.com" className={inputClasses} />
        </label>

        <label className="text-sm font-medium text-white/70">
          Password
          <input type="password" placeholder="••••••••" className={inputClasses} />
        </label>

        <div className="text-right">
          <a href="#" className="text-sm font-medium text-[#c4b5fd] hover:text-white">
            Forgot password?
          </a>
        </div>

        <Button
          type="submit"
          className="h-14 w-full rounded-2xl bg-[#7435ff] text-base font-semibold text-white shadow-lg shadow-[#7435ff]/40 transition hover:bg-[#6520ff]"
        >
          Log In
        </Button>

        <div className="flex items-center gap-4 text-sm text-white/40">
          <span className="h-px flex-1 bg-white/10" />
          OR
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <Button
          type="button"
          variant="outline"
          className="h-12 w-full rounded-2xl border-white/20 bg-transparent text-white hover:bg-white/10"
        >
          Continue with SSO
        </Button>

        <p className="text-center text-sm text-white/70">
          New to ClicksMeta?{" "}
          <Link to="/signup" className="font-medium text-[#c4b5fd] hover:text-white">
            Create an account
          </Link>
        </p>
      </form>
    </section>
  )
}
