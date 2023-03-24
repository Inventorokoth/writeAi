// import Error from "./components/Error"
import Login from "./components/Login"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext";
import Error from "./components/Error";
function App() {

  const { Currentuser } = useAuth();

  const RequireAuth = ({ children }) => {

    return Currentuser ? (children) : <Navigate to={'/login'} />
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            {/* <Route path="register" element={<Register />} />
            <Route path="mainpage" element={<LandingPage />} /> */}

            
          </Route>
          {/* <Route path="/writeAI" element={
            <RequireAuth><Layout /></RequireAuth>}>
            <Route index element={<RequireAuth><Layout /></RequireAuth>} />
            <Route path="1" element={<RequireAuth><TextFields /></RequireAuth>} />
            <Route path="2" element={<RequireAuth><TextFields /></RequireAuth>} />
            <Route path="3" element={<RequireAuth><TextFields /></RequireAuth>} />
            <Route path="4" element={<RequireAuth><TextFields /></RequireAuth>} />
            <Route path="5" element={<RequireAuth><TextFields /></RequireAuth>} />
            <Route path="6" element={<RequireAuth><TextFields /></RequireAuth>} />
            <Route path="7" element={<RequireAuth><TextFields /></RequireAuth>} />
          </Route> */}
            <Route path="*" element={<Error/>}/>
            <Route path="/writeAI" element={<RequireAuth><h1>this is the logged in page</h1></RequireAuth> }/>
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App
