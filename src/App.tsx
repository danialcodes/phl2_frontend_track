import { Outlet } from "react-router"
import NavBar from "./components/layout/NavBar"


function App() {


  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className="p-5 m-2">
        <Outlet/>
      </main>
      <footer>
        <div className="max-w-7xl mx-auto h-16 flex items-center justify-center px-5 ">
          <span className="text-lg ">© 2025 DaniDo</span>
        </div>
      </footer>

    </>
  )
}

export default App
