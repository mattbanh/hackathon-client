import "./App.scss";
import Hero from "./components/Hero/Hero";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Hero />
      {/* <BrowserRouter>
         <Routes>
          <Route path="/" element={<Marketing />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
