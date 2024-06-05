import { Outlet } from "react-router"
import Navbar from "./Components/Navbar/Navbar"
import {ToastContainer} from "react-toastify";
import {UserProvider} from "./Context/useAuth.tsx";

function App() {

    return (
      <>
          <UserProvider>
              <Navbar />
              <Outlet />
              <ToastContainer />
          </UserProvider>
    </>
  )
}

export default App
