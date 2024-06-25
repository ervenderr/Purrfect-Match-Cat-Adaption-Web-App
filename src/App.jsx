import { ColorModeContext, useMode } from "./theme"
import { CssBaseline, ThemeProvider } from "@mui/material"
import Topbar from "./pages/Global/Topbar"
import SidebarMenu from "./pages/Global/Sidebar"
import Dashboard from "./pages/Dashboard/index"
import ManageCats from "./pages/ManageCats/ManageCats"
import AdoptionRequest from "./pages/AdoptionRequests/AdoptionRequest"
import Settings from "./pages/Settings/Settings"
import User from "./pages/User/User"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {
  const [theme, colorMode] = useMode()
  const [ activeLink, setActiveLink] = useState(0)

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className="app">
        <CssBaseline />
          <SidebarMenu 
            activeLink={activeLink} setActiveLink={setActiveLink}/>
          <main className="content">
            <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/manage-cats" element={<ManageCats />} />
                <Route path="/adoption-requests" element={<AdoptionRequest />} />
                <Route path="/reports" element={<User />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
