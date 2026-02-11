import { Button } from "@/components/ui/button"
import { Globe2, ShieldCheck, Users, Zap } from "lucide-react"

const reassuranceCards = [
  {
    title: "Fast Response",
    description: "We usually reply within 24 business hours.",
    icon: Zap,
  },
  {
    title: "Secure & Private",
    description: "Your data is encrypted and never shared.",
    icon: ShieldCheck,
  },
  {
    title: "Built for Teams",
    description: "From solo founders to enterprise brands.",
    icon: Users,
  },
]

const inputClasses =
  "mt-2 h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#7435ff]"
const textareaClasses =
  "mt-2 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#7435ff]"

export function ContactPage() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-6 text-white sm:px-6 lg:pb-24 lg:pt-10">
      <header className="space-y-3 text-center">
        <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70">
          <span role="img" aria-hidden="true">
            👋
          </span>
          Let's Talk
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Let's Talk
        </h1>
        <p className="text-base text-white/60 md:text-lg">
          Talk to our team about demos, pricing, integrations, or anything else.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-lg sm:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-medium text-white/70">
              Full name *
              <input placeholder="Alex Carter" required className={inputClasses} />
            </label>
            <label className="text-sm font-medium text-white/70">
              Work email *
              <input type="email" placeholder="alex@company.com" required className={inputClasses} />
            </label>
            <label className="text-sm font-medium text-white/70">
              Mobile number *
              <input type="tel" placeholder="+1 (555) 123-4567" required className={inputClasses} />
            </label>
            <label className="text-sm font-medium text-white/70">
              Select country
              <div className="relative mt-2">
                <Globe2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/40" />
                <select
                  className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-white/5 pl-12 pr-10 text-white outline-none ring-offset-2 focus:ring-2 focus:ring-[#7435ff]"
                  defaultValue="United States"
                >
                  <option className="bg-[#0a0f1f] text-black">United States</option>
                  <option className="bg-[#0a0f1f] text-black">Canada</option>
                  <option className="bg-[#0a0f1f] text-black">United Kingdom</option>
                  <option className="bg-[#0a0f1f] text-black">Australia</option>
                  <option className="bg-[#0a0f1f] text-black">India</option>
                </select>
              </div>
            </label>
          </div>

          <label className="text-sm font-medium text-white/70">
            Tell us what you're looking for
            <textarea
              rows={4}
              className={textareaClasses}
              placeholder="Share a brief description of your goals, current stack, or technical needs."
            />
          </label>

          <label className="text-sm font-medium text-white/70">
            Any extra details (optional)
            <textarea rows={3} className={textareaClasses} placeholder="Relevant timelines, budget, or context." />
          </label>

          <Button
            type="submit"
            className="h-14 w-full rounded-2xl bg-[#7435ff] text-base font-semibold text-white shadow-lg shadow-[#7435ff]/30 transition hover:bg-[#6520ff]"
          >
            Send message
          </Button>
        </form>

        <div className="space-y-4">
          {reassuranceCards.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur-lg"
            >
              <div className="rounded-2xl bg-[#7435ff]/10 p-3 text-[#b99aff]">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-sm text-white/60">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
