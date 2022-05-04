import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/main"
import Login from "./pages/Login"
import Dashboard from "./components/Layout/dashboard";

import DashboardOverview from "./pages/Dashboard/overview";
import DashboardProfiles from "./pages/Dashboard/profiles"
import DashboardRuleChains from "./pages/Dashboard/rule_chains";
import DashboardScheduler from "./pages/Dashboard/scheduler";
import DashboardIntegration from "./pages/Dashboard/integrations";
import DashboardSettings from "./pages/Dashboard/settings";
import DashboardAbout from "./pages/Dashboard/about";

const MyRoutes = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} >
              <Route index element={<DashboardOverview />} />
              <Route path="/profiles" element={<DashboardProfiles />} />
              <Route path="/settings" element={<DashboardSettings />} />
              <Route path="/rule_chains" element={<DashboardRuleChains />} />
              <Route path="/scheduler" element={<DashboardScheduler />} />
              <Route path="/integrations" element={<DashboardIntegration />} />
              <Route path="/about" element={<DashboardAbout />} />
            </Route>
            <Route path="/" element={<Layout />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;