import Navbar from "./components/Navbar";

import {HomePage}  from "./pages/HomePage";
import { SettingsPage } from "./pages/SettingsPage";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { ProfilePage } from "./pages/ProfilePage";
import {Routes , Route} from "react-router-dom";
const App = () => {
  return (
    <div>


      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfliePage />} />
        
      </Routes>


      
    </div>
  )
}

export default App