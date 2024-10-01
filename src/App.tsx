import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Homepage from "./pages/home";
import ContactUs from "./pages/contact";
import DistributeBatches from "./pages/distribute-batches";
import Footer from "./components/footer/footer";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/distribute" element={<DistributeBatches />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
