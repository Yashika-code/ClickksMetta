"use client"

import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  {
    label: "Products",
    children: ["Campaign Management", "Marketing Analytics", "Automated Payout", "Fraud Detection"],
  },
  {
    label: "Solutions",
    children: ["E-Commerce", "Fintech", "Banking", "Travel", "Media & Network", "SaaS"],
  },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#features" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a1628]/95 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#06b6d4] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            <span className="text-white font-bold text-sm tracking-tight">CM</span>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Clicks<span className="text-[#06b6d4]">Meta</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={link.href || "#"}
                className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1.5 font-medium rounded-lg hover:bg-white/5"
              >
                {link.label}
                {link.children && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`}
                  />
                )}
              </a>
              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 pt-3 animate-scale-in" style={{ transformOrigin: "top left" }}>
                  <div className="bg-[#0f1f3d]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 min-w-[220px] shadow-2xl shadow-black/30">
                    {link.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200"
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-white/70 hover:text-white hover:bg-white/10 rounded-full px-5 font-medium"
          >
            Free Trial
          </Button>
          <Button className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] hover:from-[#1d4ed8] hover:to-[#0891b2] text-white border-0 rounded-full px-6 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all">
            Request Demo
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0a1628]/98 backdrop-blur-2xl border-t border-white/5 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <div key={link.label} className="py-3 border-b border-white/5">
              <a
                href={link.href || "#"}
                className="text-white/80 text-sm font-medium"
                onClick={() => !link.children && setMobileOpen(false)}
              >
                {link.label}
              </a>
              {link.children && (
                <div className="mt-2 ml-4 flex flex-col gap-1.5">
                  {link.children.map((child) => (
                    <a key={child} href="#" className="text-white/40 text-sm hover:text-white transition-colors py-1">
                      {child}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent rounded-full">
              Free Trial
            </Button>
            <Button className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white border-0 rounded-full">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
