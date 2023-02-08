import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./screens/Layout";
import Home from "./components/Links/Home";
import Items from "./components/Links/Items";
import Offers from "./components/Links/Offers";
import Contact from "./components/Links/Contact";
import './index.css';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/items" element={<Items />} />
          <Route exact path="/ofertas" element={<Offers />} />
          <Route exact path="/contacto" element={<Contact />} />  
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
