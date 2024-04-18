import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  )
}

export default App