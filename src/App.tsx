import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home";
import Contact from "./pages/contact";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import DistributeBatches from "./pages/distribute-batches";

const App: React.FC = () => {
  return (
    <Router basename="/forever-rwa">
      <div className="">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/distribute" element={<DistributeBatches />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
