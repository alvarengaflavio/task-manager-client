import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProviderReducer } from './components/shared/ThemeProviderReducer'
import { TalespireProvider } from './contexts/talespire/TalespireContext'
import { GlobalStyle } from './globalStyles'
import { AboutPage } from './pages/AboutPage'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <TalespireProvider>
      <ThemeProviderReducer>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProviderReducer>
    </TalespireProvider>
  )
}

export default App
