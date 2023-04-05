import Login from "./components/Login"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { useAuth } from "./contexts/AuthContext";
import Error from "./components/Error";
import Register from "./components/Register";
import HomeComponent from "./components/HomeComponent";
import Layout from "./components/Layout";
import TextBoxes from "./components/TextBoxes";
import LandingPage from "./pages/LandingPage";
function App() {

  const { Currentuser } = useAuth();

  const RequireAuth = ({ children }) => {

    return Currentuser ? (children) : <Navigate to={'/login'} /> //here we check if there is a logged in user and if so we allow to show the children otherwise navigate the user to the login page
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/writeAI" element={<RequireAuth><Layout /></RequireAuth>}> {/*here i am using example for the layout inside it are the elements to be renderd in the outlet of the layout */}
            <Route index element={<HomeComponent />} />
            <Route path="grammar-correction" element={<RequireAuth><TextBoxes prompt={'correct the following to standard english'} /></RequireAuth>} />
            <Route path="paragraph-summarization" element={<RequireAuth><TextBoxes prompt={'summarize the following'} /></RequireAuth>} />
            <Route path="code-explanation" element={<RequireAuth><TextBoxes prompt={'Explain the following code'} /></RequireAuth>} />
            <Route path="title-generation" element={<RequireAuth><TextBoxes prompt={'Generate  a title from the following '} /></RequireAuth>} />
            <Route path="text-shortening" element={<RequireAuth><TextBoxes prompt={'shorten the following '} /></RequireAuth>} />
            <Route path="text-lengthening" element={<RequireAuth><TextBoxes prompt={'lengthen the following '} /></RequireAuth>} />

          </Route>

          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="contact" element={<h2>contact page</h2>} /> {/*replace the contact component later*/}
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="mainpage" element={<LandingPage />} />
          <Route path="*" element={<Error />} />

        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App
