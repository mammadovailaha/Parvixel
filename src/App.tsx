
import './App.css'
import { ThemeProvider } from './components/ThemeContext'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import AppRouter from './router/AppRouter'

function App() {


  return (
    <ThemeProvider>
      <Navbar />
      <AppRouter />
      <Footer />
    </ThemeProvider>
  )
}

export default App
