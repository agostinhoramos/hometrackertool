import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/main"
import Overview from "./pages/Overview"
import Login from "./pages/Login"

const MyRoutes = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Overview />} />
                <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;