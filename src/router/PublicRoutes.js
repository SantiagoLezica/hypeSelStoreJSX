
import LoginScreen from "../components/LoginScreen/LoginScreen";
import { Routes, Route, Navigate } from "react-router-dom";
import RegisterScreen from "../components/RegisterScreen/registerScreen";






const PublicRoutes = () => {

    return(
        <Routes>
        <Route path="/registrarse" element={<LoginScreen />} />        
        <Route path="/registerScreen" element={<RegisterScreen />} />        
        <Route path="*" element={<Navigate to={"/registrarse"} />} />        
       </Routes>
    )
}
export default PublicRoutes