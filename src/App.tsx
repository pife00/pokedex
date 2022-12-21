import { NavBar } from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import { HomeView } from "./views/HomeVIew";
import { Details } from "./views/Details";
function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path='/' element={<HomeView  />} />
        <Route path='/choose/:name' element={<Details /> } />
      </Routes>
    </div>
  )
}

export default App
