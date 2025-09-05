import "./App.css";
import { ThemeProvider } from "./components/ThemeContext";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="overflow-x-hidden ">
      <ThemeProvider>
        <Navbar />
        <AppRouter />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
