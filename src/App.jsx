import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import Todo from "./screen/Todo";
function App() {
return (
<Router>
<Routes>
<Route path="/" element={<Login />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/todo" element={<Todo />} />
</Routes>
</Router>
);
}
export default App;