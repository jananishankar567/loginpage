import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
const Protector=({children})=>{
    const {valid}=useContext(AuthContext);
    if(!valid){
        return <Navigate to="/" replace/>
    }
    return children;
}
export default Protector;