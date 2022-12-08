import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainPage from "./pages/MainPage/MainPage";
import LivePage from "./pages/LivePage/LivePage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/live" element={<LivePage />} />
          {/* <Route path="/404" element={<ErrorPage />} /> */}
          {/* <Route path="*" element={<Navigate to="/404" />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
