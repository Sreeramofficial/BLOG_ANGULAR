import logo from "./logo.svg";
import "./App.css";
import UserDetails from "./UserDetails";
import ApiError from "./Components/ApiError";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./Components/AddUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<UserDetails />}></Route>
          <Route exact path="/addUser" element={<AddUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
