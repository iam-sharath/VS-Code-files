
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../screen/PostScreen/Login";
import DisplayProducts from "../navbar";
const Navigation =()=>{
    return(
        <Router>
        <Routes>
            <Route path="/" Component={DisplayProducts} />
            <Route path="/login" Component={LoginPage} />
        </Routes>
        </Router>
        
    )
}
export default Navigation;