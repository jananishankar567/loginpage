import {useState,useContext} from "react";
import { Form,Button,Alert,Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const Login=()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");

    const{login}=useContext(AuthContext);
    const navigate=useNavigate();

    const handleLogin=()=>{
        if(!email ||!password){
            setError("Email and password are required");
            return;
        }
    
        login();
        navigate("/dasboard");
    };
        return(
            <Container style={{maxWidth:"400px",marginTop:"50px"}}>
                <h3 className="mb-3">Login</h3>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control 
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                    variant="primary"
                    onClick={handleLogin}
                    disabled={!email||!password}
                    >Login</Button>
                </Form>
            </Container>
        );
    };
    export default Login;