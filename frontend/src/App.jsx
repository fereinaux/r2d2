import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Create from "./pages/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Movie />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
