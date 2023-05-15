import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
