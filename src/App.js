import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Home } from "./pages";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <body>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </body>
    </BrowserRouter>
    </>
  )
}

export default App