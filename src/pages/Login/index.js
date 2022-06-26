import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
import { TextField, Button, Typography } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login__container">
        <Typography variant="h2">Login</Typography>
        <TextField
          fullWidth
          label="E-mail Address"
          type="text"
          variant="filled"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button
          variant="contained"
          className="login__btn"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </Button>
        <Button
          variant="contained"
          className="login__btn login__google"
          onClick={signInWithGoogle}
        >
          <FcGoogle size="20px" />
          &nbsp; Login with Google
        </Button>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <br />
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </div>
    </div>
  );
}

export default Login;
