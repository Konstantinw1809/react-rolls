import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import FullRoll from "./pages/FullRoll/FullRoll";
import NotFound from "./pages/NotFound/NotFound";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/roll/:id" element={<FullRoll />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
