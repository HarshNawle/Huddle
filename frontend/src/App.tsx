import { Route, Routes } from "react-router-dom"
import SignupPage from "./components/pages/SignupPage"
import Navbar from "./components/Navbar"
import LoginPage from "./components/pages/LoginPage"
import FooterSection from "./components/FooterSection"



const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
      <FooterSection />
    </div>
  )
}

export default App