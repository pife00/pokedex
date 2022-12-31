import { NavBar } from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import { HomeView } from "./views/HomeVIew";
import { Details } from "./views/Details";




function App() {
  return (
    <div className="dark:bg-gray-700 dark:h-fit bg-gray-100" >
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/:page' element={<HomeView />} />
        <Route path='/choose/:id' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
