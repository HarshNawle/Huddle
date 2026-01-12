import { Route, Routes } from "react-router-dom"
import LoginPage from "./components/pages/LoginPage"
import RegisterPage from "./components/pages/RegisterPage"
import NavbarDemo from "./components/Navbar"
import InteractiveGridPatternDemo from "./components/GridPattern"

function App() {
  return (
    <div>
      <NavbarDemo/>
      <InteractiveGridPatternDemo/>
      <Routes>
        <Route path="/singup" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App