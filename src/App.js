import logo from "./logo.svg";
import "./App.css";
import UserDetails from "./UserDetails";
import ApiError from "./Components/ApiError";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<UserDetails />}></Route>
          <Route exact path="/addUser" element={<AddUser />}></Route>
          <Route exact path="/updateUser/:id" element={<EditUser />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
