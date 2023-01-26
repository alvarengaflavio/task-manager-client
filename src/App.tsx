import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProviderReducer } from './components/shared/ThemeProviderReducer'
import { TalespireProvider } from './contexts/talespire/TalespireContext'
import { GlobalStyle } from './globalStyles'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/Home'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { TaskPage } from './pages/TaskPage'

function App() {
  return (
    <TalespireProvider>
      <ThemeProviderReducer>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/task/:id" element={<TaskPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProviderReducer>
    </TalespireProvider>
  )
}

export default App
