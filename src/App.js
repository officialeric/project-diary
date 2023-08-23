import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Home ,RegisterPage , LoginPage , FlowSpace} from "./pages";

const App = () => {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<RegisterPage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/flowspace" element={<FlowSpace />}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App