import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Login/login";
import SelectApp from "./Selectapp/selectapp";
import Home from "./Home/Home";
import Trending from "./Trending/Trending";
import Profile from "./Profile/Profile";
import Test from "./test";
import Search from "./Search/Search";
import Ab from "./ab";
import Navbar from "./Navbar/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}
          {/* <Route exact path="/navbar" element={<Navbar />} /> */}
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/select" element={<SelectApp />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/trending" element={<Trending />} />
          <Route exact path="/test" element={<Ab />} />
          <Route path="/tags/:tags" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
