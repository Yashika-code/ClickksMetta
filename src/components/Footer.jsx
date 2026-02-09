import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = [
  {
    title: "Products",
    links: ["Campaign Management", "Marketing Analytics", "Automated Payout", "Fraud Detection", "Easy Automation"],
  },
  {
    title: "Solutions",
    links: ["E-Commerce", "Fintech", "Banking", "Travel", "Media & Network", "SaaS"],
  },
  {
    title: "Resources",
    links: ["Blog", "Documentation", "API Reference", "Case Studies", "Help Center"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Contact", "Privacy Policy", "Terms of Service"],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#060e1a] border-t border-white/5 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#2563eb]/[0.04] rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Newsletter strip */}
        <div className="py-12 border-b border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Stay up to date</h3>
              <p className="text-sm text-white/35">Get the latest news and insights delivered to your inbox.</p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[#2563eb]/50 focus:ring-1 focus:ring-[#2563eb]/30 transition-all"
              />
              <Button className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white border-0 rounded-full px-6 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#06b6d4] flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <span className="text-white font-bold text-sm">CM</span>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Clicks<span className="text-[#06b6d4]">Meta</span>
                </span>
              </div>
              <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-xs">
                Powerful analytics & tracking platform for advertisers, affiliates, and agencies. One platform to manage all your campaigns.
              </p>
              <div className="flex flex-col gap-3.5">
                <a href="#" className="flex items-center gap-2.5 text-sm text-white/35 hover:text-white/60 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  support@clicksmeta.com
                </a>
                <a href="#" className="flex items-center gap-2.5 text-sm text-white/35 hover:text-white/60 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  +1 (555) 000-0000
                </a>
                <a href="#" className="flex items-center gap-2.5 text-sm text-white/35 hover:text-white/60 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  San Francisco, CA
                </a>
              </div>
            </div>

            {/* Link columns */}
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-semibold text-sm mb-5">{col.title}</h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-white/35 hover:text-white/60 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/25">
            {new Date().getFullYear()} ClicksMeta. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-xs text-white/35 hover:bg-white/10 hover:text-white/60 transition-all font-medium"
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
