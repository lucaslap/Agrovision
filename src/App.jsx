import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Servicos from "./pages/Servicos";
import Sobre from "./pages/Sobre";
import Demo from "./pages/Demo";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
