"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from "../assets/clicksmeta-logo.png"

const navLinks = [
  {
    label: "Products",
    children: ["Campaign Management", "Marketing Analytics", "Automated Payout", "Fraud Detection"],
  },
  {
    label: "Solutions",
    children: ["E-Commerce", "Fintech", "Banking", "Travel", "Media & Network", "SaaS"],
  },
  { label: "Pricing", href: "/#pricing" },
  { label: "Resources", href: "/#features" },
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

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-[#0a1628]/95 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/10 py-2"
        : "bg-transparent py-4"
        }`}
    >
       <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="text-xl font-bold text-white tracking-tight">
            <img
              src={logo}
              alt="Clicksmeta Logo"
              className="h-8 w-auto brightness-0 invert"
            />

          </span>
        </Link>

          <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const hasChildren = Boolean(link.children?.length)
            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => hasChildren && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                 {hasChildren ? (
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                )}
              {hasChildren && openDropdown === link.label && (
                  <div className="absolute left-0 top-full pt-3 animate-scale-in" style={{ transformOrigin: "top left" }}>
                    <div className="min-w-[220px] rounded-2xl border border-white/10 bg-[#0f1f3d]/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-2xl">
                      {link.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="block rounded-xl px-4 py-2.5 text-sm text-white/60 transition-all duration-200 hover:bg-white/5 hover:text-white"
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

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            variant="ghost"
            className="rounded-full px-5 font-medium text-white/80 hover:bg-white/10 hover:text-white"
          >
          <Link to="/contact">Let's Talk</Link>
          </Button>
          <Button
            asChild
            className="rounded-full bg-[#7435ff] px-6 text-white shadow-lg shadow-[#7435ff]/30 transition hover:bg-[#6520ff]"
          >
            <Link to="/signup">Get Started</Link>
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
        className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
         <div className="border-t border-white/5 bg-[#0a1628]/98 px-4 pb-6 pt-2 backdrop-blur-2xl sm:px-6">
          {navLinks.map((link) => {
            const hasChildren = Boolean(link.children?.length)
            return (
              <div key={link.label} className="border-b border-white/5 py-3">
                {hasChildren ? (
                  <div>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between text-left text-sm font-medium text-white/80"
                      onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="mt-2 ml-2 flex flex-col gap-1.5">
                        {link.children.map((child) => (
                          <a key={child} href="#" className="py-1 text-sm text-white/50 transition-colors hover:text-white">
                            {child}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-white/80"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            )
          })}
          <div className="mt-4 flex flex-col gap-3">
            <Button
              asChild
              variant="outline"
              className="rounded-full border-white/20 text-white hover:bg-white/10"
              onClick={closeMobile}
            >
              <Link to="/contact">Let's Talk</Link>
            </Button>
            <Button
              asChild
              className="rounded-full bg-[#7435ff] text-white hover:bg-[#6520ff]"
              onClick={closeMobile}
            >
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
