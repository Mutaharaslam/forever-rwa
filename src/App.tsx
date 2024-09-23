import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/home";
import Contact from "./pages/contact";
import Header from "./components/header/header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
