import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import SignupPage from "./components/pages/SignupPage"
import Navbar from "./components/Navbar"
import LoginPage from "./components/pages/LoginPage"
import FooterSection from "./components/FooterSection"
import HomePage from "./components/pages/HomePage"
import { useAuthStore } from "./store/useAuthStore"
import { LoaderOne } from "./components/ui/loader"



const App = () => {
  
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  const location = useLocation();
  const hasHydrated = useAuthStore.persist.hasHydrated();

  if (!hasHydrated) {
    return <div><LoaderOne /></div>;
  }

  const showFooterRoutes = ["/signup", "/login"];

  const showFooter = showFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>

          {/* Public Routes */}
          <Route 
          path="/signup" 
          element={
            isAuthenticated ? <Navigate to="/"  /> : <SignupPage />
          }
          />
          <Route 
          path="/login" 
          element={
            isAuthenticated ? <Navigate to="/" replace={true} /> : <LoginPage />
          }
          />

          {/* Private Routes */}
          <Route 
          path="/" 
          element={
            isAuthenticated ? <HomePage /> : <Navigate to="/login" replace={true} />
          }
          />
        </Routes>
      </main>
      
      {/* Show Footer only on public routes */}
      {showFooter && <FooterSection />}
    </div>
  )
}

export default App