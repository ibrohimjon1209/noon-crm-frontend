"use client"

import { useState, useEffect, useRef } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import Navbar from "./pages/Navbar/Navbar"
import Nav_top from "./pages/Navbar/Nav-top"
import Main_home from "./pages/home/main_home"
import Assigments from "./pages/assigments/assigments.jsx"
import Lids from "./pages/Lids/Lids_main.jsx"
import Groups from "./pages/Groups/Groups"
import Students from "./pages/Students/Students"
import Study_section from "./pages/Study_section/Study_section"
import Finance from "./pages/Finance/Finance"
import Management from "./pages/Management/Management"
import Marketing from "./pages/Marketing/Marketing"
import Reports from "./pages/Reports/Reports"
import Control from "./pages/Control/Control"
import Settings from "./pages/Settings/Settings.jsx"
import Login from "./pages/Log/Login.jsx"
import Profile from "./pages/Profile/Profile.jsx"
import "./index.css" // Import the CSS for animations

// AnimatedRoutes component to handle the transitions
const AnimatedRoutes = ({ isLoggedIn }) => {
  const location = useLocation()
  const prevPathRef = useRef(location.pathname)
  const [shouldAnimate, setShouldAnimate] = useState(true)

  // Check if the path has actually changed
  useEffect(() => {
    // If the path is the same, don't animate
    if (prevPathRef.current === location.pathname) {
      setShouldAnimate(false)
    } else {
      setShouldAnimate(true)
      prevPathRef.current = location.pathname
    }
  }, [location.pathname])

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} timeout={shouldAnimate ? 300 : 0} classNames="page">
        <Routes location={location}>
          {/* Simple conditional rendering for root path */}
          <Route path="/" element={isLoggedIn ? <Main_home /> : <Navigate to="/login" />} />

          <Route path="/assigments" element={isLoggedIn ? <Assigments /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lids/*" element={isLoggedIn ? <Lids /> : <Navigate to="/login" />} />
          <Route path="/groups/*" element={isLoggedIn ? <Groups /> : <Navigate to="/login" />} />
          <Route path="/students/*" element={isLoggedIn ? <Students /> : <Navigate to="/login" />} />
          <Route path="/study_section/*" element={isLoggedIn ? <Study_section /> : <Navigate to="/login" />} />
          <Route path="/finance/*" element={isLoggedIn ? <Finance /> : <Navigate to="/login" />} />
          <Route path="/control" element={isLoggedIn ? <Control /> : <Navigate to="/login" />} />
          <Route path="/management" element={isLoggedIn ? <Management /> : <Navigate to="/login" />} />
          <Route path="/marketing" element={isLoggedIn ? <Marketing /> : <Navigate to="/login" />} />
          <Route path="/reports" element={isLoggedIn ? <Reports /> : <Navigate to="/login" />} />
          <Route path="/settings/*" element={isLoggedIn ? <Settings /> : <Navigate to="/login" />} />
          <Route path="/profile/*" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check the user's login status and update `isLoggedIn`
    const checkAuth = () => {
      const token = localStorage.getItem("token")
      setIsLoggedIn(!!token)
      setIsLoading(false)
    }

    checkAuth()

    // Listen for storage events (in case token is updated in another tab)
    window.addEventListener("storage", checkAuth)

    // Listen for custom auth change events
    window.addEventListener("auth-change", checkAuth)

    return () => {
      window.removeEventListener("storage", checkAuth)
      window.removeEventListener("auth-change", checkAuth)
    }
  }, [])

  const customScrollbar = {
    overflowY: "auto",
    scrollbarWidth: "auto",
    scrollbarColor: "rgba(0,53,95,1) rgba(0, 0, 95, 1)",
  }

  useEffect(() => {
    document.body.style.transform = "scale(0.75)"
    document.body.style.transformOrigin = "top left"
    document.body.style.width = "133.33%"
    document.body.style.overflow = "hidden"
    document.body.style.height = "133vh"

    return () => {
      // Clean up the styles when component unmounts
      document.body.style.transform = ""
      document.body.style.transformOrigin = ""
      document.body.style.width = ""
      document.body.style.height = ""
      document.body.style.overflow = ""
    }
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-t-blue-500 border-b-blue-500 rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <Router>
      <div className="flex w-[100%] bg-[#F0F2F2] m-0 h-[calc(132.5vh)]">
        {isLoggedIn && (
          <div className="z-50 h-screen sticky top-0">
            <Navbar />
          </div>
        )}
        <div className="flex flex-col transition-all duration-300 w-full overflow-hidden">
          {isLoggedIn && <Nav_top />}
          <div
            className="flex-1 page-container"
            style={{
              ...customScrollbar,
              overflowY: "auto",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(0,53,95,1) rgba(255, 255, 255, 1)",
            }}
          >
            <AnimatedRoutes isLoggedIn={isLoggedIn} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App

