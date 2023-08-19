import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Home , LoginPage , RegisterPage , DashBoard} from "./pages";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/dashboard" element={<DashBoard />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App