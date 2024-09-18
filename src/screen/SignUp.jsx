import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const handleLogin = async (e) => {
e.preventDefault();
try {
await signInWithEmailAndPassword(auth, email, password);
navigate("/todo");
} catch (error) {
console.error("Login failed:", error.message);
}
};
return (
<div className="flex justify-center items-center min-h-screen">
<form className="w-full max-w-sm" onSubmit={handleLogin}>
<h1 className="text-2xl font-bold mb-4">Login</h1>
<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="input input-bordered w-full mb-4"
/>
<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
className="input input-bordered w-full mb-4"
/>
<button type="submit" className="btn btn-primary w-full">
Login
</button>
</form>
</div>
);
}
export default Login;