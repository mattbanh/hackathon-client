import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="test-header">Electronic Arts</h1>
      </header>
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
