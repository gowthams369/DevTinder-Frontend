import { BrowserRouter, Route, Routes } from "react-router"
import Navbar from "./Navbar"
import Body from "./Body"
import Login from "./Login"
import Profile from "./Profile"

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
