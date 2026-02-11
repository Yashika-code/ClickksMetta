import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { HomePage } from "./pages/HomePage"
import { ContactPage } from "./pages/ContactPage"
import { SignupPage } from "./pages/SignupPage"
import { LoginPage } from "./pages/LoginPage"

function App() {
  return (
      <div className="min-h-screen  w-full overflow-x-hidden bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] text-white">
        <Navbar />

        {/* Give space below fixed navbar so content isn't hidden */}
        <main className="pt-24 md:pt-28">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>

        <Footer />
      </div>
  )
}

export default App
