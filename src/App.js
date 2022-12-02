import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>IP TEAM 8</h1>

      {/* <BrowserRouter>
         <Routes>
          <Route path="/" element={<Marketing />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter> */}
      <Footer />
    </div>
  );
}

export default App;
